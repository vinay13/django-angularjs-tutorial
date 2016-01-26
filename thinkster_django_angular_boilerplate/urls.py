from django.conf.urls import patterns, url, include
from rest_framework_nested import routers

from authentication.views import AccountViewSet

from thinkster_django_angular_boilerplate.views import IndexView
from authentication.views import LoginView
from authentication.views import LogoutView
from posts.views import AccountPostsViewSet, PostViewSet


from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter()


router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

router.register(r'posts', PostViewSet)

accounts_router = routers.NestedSimpleRouter(
    router, r'accounts', lookup='account'
)
accounts_router.register(r'posts', AccountPostsViewSet)

# print accounts_router.urls
# print router.urls
# order matters
urlpatterns = patterns(
    '',
    # url(r'^', include(router.urls)), # or use empty string ''. Don't forget this!!!!! Otherwise, the url pattern won't work!!!
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/', include(accounts_router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url(r'^api/v1/auth/logout/$', LogoutView.as_view(), name='logout'),

    url(r'^.*$', IndexView.as_view(), name='index'),
)
