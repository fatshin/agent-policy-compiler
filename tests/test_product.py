import unittest
from pathlib import Path

import product
from runtime.server import page, result_markup


class ProductTests(unittest.TestCase):
    def test_fixed_acceptance(self):
        result = product.analyze({field.name: field.value for field in product.PRODUCT.fields})
        passed, checks = product.acceptance(result)
        self.assertTrue(passed, checks)

    def test_page_is_product_specific_and_escapes_output(self):
        self.assertIn(product.PRODUCT.name, page())
        self.assertNotIn("<script>", result_markup({"status": "<script>", "headline": "safe", "metrics": {}, "items": [], "evidence": [], "artifact": {}}))

    def test_policy_values_are_compiled_instead_of_hardcoded(self):
        policy = product.POLICY.replace("$500", "$1000").replace(
            "Support may use lookup_customer and draft_reply.",
            "Support may use lookup_customer, draft_reply and issue_refund.",
        )
        ir = product.compile_policy(policy)
        self.assertEqual(ir["refund_approval_above"], 1000)
        self.assertIn("issue_refund", ir["role_allowlists"]["support"])
        decision = product.evaluate(
            ir,
            {"role": "support", "tool": "issue_refund", "amount": 900},
        )
        self.assertEqual(decision["decision"], "ALLOW")

    def test_public_fixture_matches_engine_fixture(self):
        site = Path("site/app/product-data.ts").read_text()
        self.assertIn("POL-01: External transmissions containing PII", site)
        self.assertIn("$500", site)
        self.assertNotIn("Gift-card", site)


if __name__ == "__main__":
    unittest.main()
