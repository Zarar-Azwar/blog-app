from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from .models import BlogPost
from .serializers import UserSerializer
class BlogPostListView(ListAPIView):
    queryset=BlogPost.objects.order_by('-date_created')
    serializer_class=UserSerializer
    lookup_field='slug'
    permission_classes=(permissions.AllowAny,)


class BlogPostDetailView(RetrieveAPIView):
    queryset=BlogPost.objects.order_by('-date_created')
    serializer_class=UserSerializer
    lookup_field='slug'
    permission_classes=(permissions.AllowAny,)

class BlogPostFeaturedView(ListAPIView):
    queryset=BlogPost.objects.all().filter(featured=True)
    serializer_class=UserSerializer
    lookup_field='slug'
    permission_classes=(permissions.AllowAny,)

class BlogPostCategoryView(APIView):
    serializer_class=UserSerializer
    permission_classes=(permissions.AllowAny,)

    def post(self,request,format=None):
        data=self.request.data
        category=data['category']
        queryset=BlogPost.objects.order_by('-date_created').filter(category__iexact=category)
        serializer=UserSerializer(queryset,many=True)
        return Response(serializer.data)
# Create your views here.
