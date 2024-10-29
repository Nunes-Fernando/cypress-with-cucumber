Feature: Login
    Eu como usuário
    Quero logar na aplicação
    Para realizar minhas compras 

    Scenario: Login com campo e-mail vazio
        Given I am login screen
        When  I click on login
        Then  I see error message
    

     # Scenario: Login com campo senha vazio
      #  Given I am login screen
       # And fill e-mail
        #When  I click on login
        #Then  I see error message

    
    # Scenario: Login com campo e-mail vazio
      #  Given I am login screen
       # And fill my credencials
       # When  I click on login
       # Then  I see sucess message