from django.contrib import admin
from django.urls import path,include
from home import views

urlpatterns = [
    
    path('',views.index,name='index'),
    path('about',views.about,name='about'),
    path('project',views.project,name='project'),
    path('skills',views.skills,name='skills'),
    path('contact',views.contact,name='contact'),
    path('experience',views.experience,name='experience')

]