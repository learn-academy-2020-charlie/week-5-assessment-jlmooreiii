# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new <app_name> -d postregsql -T



2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - this is the key word telling rails that you are about to link a non-root page to a method in your main controller
library - represents a page on the website. Thi sis what the user would type into the URL to help navigate to the desired page
:id - This is a param call. The param is referenced in the main controller, which will be linked to an html.erb file with direction son how to hande it.
book - name of the class in the main controller which contains the method to handle how the url typed is handled.
show - name of the method in the book class that will handle the url that the user inputs.


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

    You will have to declare a migration. To do this, you need to...
    1) in the terminal, generate a new migration using the command
        $ rails generate migration <name_of_migration_file>
    2) go to the mirgration file located in ./db/migrate
    3) create a change method and add the desired column:
    
    def change
        add_column :table_name, :column_name, :data_type
    end
    4) in the terminal, use the command $ rails db:migrate to update the schema.




4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

    $ rails generate model Person shirt:string pants:string shoes:string

5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

    Inside of the person.rb file, inside the class add the line - 
    validates :shirt, :pants, :shoes, presence:true

6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

    The naming convention for genreating a Rails model is singular and pascal cased.


    If you are referening this table is stright SQL, then tables is lower cased and plural, snake_cased too if necessary.

    If you are referencing a table in a migration method, the table is lower case, pluralm and snake cased.

    If you are referencing this table as a route or defining relationships in classes, the tables are lower cased and either singular or plural depending on the context. 
