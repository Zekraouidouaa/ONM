from django.urls import path
from .views import MessageListCreate, MessageDetail

urlpatterns = [
    path('messages/', MessageListCreate.as_view(), name='message-list-create'),
    path('messages/<int:pk>/', MessageDetail.as_view(), name='message-detail'),
]
