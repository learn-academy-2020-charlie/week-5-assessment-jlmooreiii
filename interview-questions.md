# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for Model, View, Controller. This refers to the structure of how rails operates from a full stack perpective. The model is the back end data, stored as tables. The views is managed by html.erb files. I'm not really sure about the full scope of what the controller does, but I know that it stores information that the view files can pull from, similar to how components in react depend on the main state class for information. 

  Researched answer: The MVC model is a process / model of how the application carries out requests that the user specifies. Basically, the user sees the view and interacts with the view. This will trigger the controller, which will perform an action on the model, or backend information. The view is updated bassed on what the current state of the model then we start the process over again.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: This means that the applicaiton has full usability in terms of access to its backend database: create, read, update and deleting content.

  Researched answer: Same as mine, didn't find any more details



3. What is a migration? Why would you use one?

  Your answer: A migration is a file that you create in Rails, whcih contains methods that uopdate the schema when needed. You use these because it allows for the developer to track changes to the schema over time and it is considered bad practice to update the schema manually. You should go through migrations to update the schema.

  Researched answer: Migrations also allow for you t ouse Ruby code to make changes to your schema instead of SQL code.



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: Person has_a :computer (Computer would hold the foreign key), Person has_many :computers (Computer would hold the foreign key), Computer belongs_to person (Computer would hold the foreign key) 

  Researched answer: Didn't see anything else to add



5. What is object-relational mapping?

  Your answer: I'm not sure, but I thin ORM is when you define the relationships between tables or classes in Rails. For example, if you has a able for Person and a table for Computer, you could say that Person has_many :computers. This helps the independent classes communicate information to each other.  

  Researched answer: Okay, the correct answer is the ORM is essentially being able to convert data from usually incombatible systems, such as an SQL database with your ruby front end. SSoftware is used to help with that communications. Rails uses Active Record to help backend tables and data communicate with front end commands. It does this by taking the information stored in the table and creates classes and objects that can be referenced by ruby code. ORM allows for you to do things like change you rdatabase manager without having to re-write a bunch of cod eon your front end.  



6. What is a gem?

  Your answer: A gem is a package or library of ruby code that can be imported into your ruby file to be used. 

  Researched answer: This is basically the answer.



7. Why is it important to have validations in your application?

  Your answer: It is important to have validations in your code so that the user does not put corrupt, malicious, useless, or typo-ed into your database. This saves time and sleep for the developer. 

  Researched answer: Your validation can be linked to error messages to the user. YOU can also specify which actions the error occurs on, like just the CREATE or just the UPDATE.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes: REST stands for representational state transfer. It is when HTML verbs are linked to server side CRUD actions. 
- JSON: Thi sstands for JavaScript Object Notation. Is is the format used when data is transered from a server to a web ser. Information of the object is stored in key value pairs, and the objects are stored in curly brackets while arrays are stored in square brackets.
- API: Application programming interface. It is like a website for your computer to use, that you as the user do not really see. It's software that handles the exchange of data between a server and a webapp/user. The API provides easy-to-use commands to retrieve information that is more complex then what is shown.
- Endpoints: An endpoint is the "touchpoint" betweeen an api and a server. It is represented as a URL. 
- Strong params: These are parameters that have been protected by the developer so that the user doesn't have access to change them.
