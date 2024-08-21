# from django.http import HttpRequest
# from django.test import TestCase
# from website_app.views import home  # これから実装するビュー関数（今はまだ存在しません）

# class TopPageViewTest(TestCase):
#     def test_top_returns_200(self):
#         request = HttpRequest()  # HttpRequestオブジェクトの作成
#         response = home(request)
#         self.assertEqual(response.status_code, 200)

#     def test_top_returns_expected_content(self):
#         request = HttpRequest()  # HttpRequestオブジェクトの作成
#         response = home(request)
#         self.assertEqual(response.content, b"Hello World")