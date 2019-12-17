# APP
Site to create Projects and in those projects add tasks to do. Authenticate to see profile information
# CheckList
## Depedency Injection:
Constructors were injected with services
## SPA
Made in Angular
## Auth 
Auth0, if a user tries to access ./profile without being authenicated will redirect to login
## ORM 
Table of Tasks contain a foreign key from Table of Projects, then models were scalfolded from database. Frontend has its own view model and doesn't access the database tables directly. 
## MVC 
Frontend: MVVM from https://scotch.io/tutorials/mvc-in-an-angular-world Backend contains Models and controllers.
## Continous Intergration
Added an Azure Pipeline: azure-pipelines.yml
# Link
https://lll201912150316212.azurewebsites.net/
