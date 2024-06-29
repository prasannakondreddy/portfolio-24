from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    return render(request,'home.html')

def about(request):
    return render(request,'about.html')

def project(request):
    return render(request,'project.html')

def contact(request):
    return render(request,'contact.html')

def skills(request):
    return render(request,'skills.html')

def experience(request):
    return render(request,'experience.html')