import React from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import '../App.css';

function Quizz() {
  var json = {
    showProgressBar: "top",
    firstPageIsStarted: true,
    startSurveyText: "Iniciar",
    pages: [
      {
        questions: [
          {
            type: "html",
            html: "Este quizz vai testar seu conhecimento sobre vida animal, boa sorte no seu teste."
          }
        ]
      }, 
      {
        elements: [
          { type: "text", name: "playerName", title: "Digite seu nome", isRequired: true}
         ]
      },
      
      
      {
          questions: [
              {
                  type: "radiogroup",
                  name: "pergunta1",
                  title: "Qual é o maior mamífero terrestre brasileiro?",
                  choices: [
                      "Onça", "Elefante", "Ornitorrinco", "Anta"
                  ],
                  correctAnswer: "Anta",
                  
              },
                  {
                    type: "radiogroup",
                  name: "pergunta2",
                  title: "Qual o nome correto do fenômeno da mudança de cor do camaleão?",
                  choices: [
                      "Mimetismo", "Nao existe um nome especifico", "Mudanca de cor", "Camuflagem"
                  ],
                  correctAnswer: "Mimetismo",
                  }
          ]
      }, {
          questions: [
              {
                  type: "radiogroup",
                  name: "pergunta3",
                  title: "O que os répteis não possuem?",
                  choicesOrder: "random",
                  choices: [
                      "Sistema nervoso", "glândulas sudoríparas", "Nenhuma das opções", "Sentido do olfato"
                  ],
                  correctAnswer: "glândulas sudoríparas"
              },
              {
                type: 'radiogroup',
                name: 'pergunta4',
                title: 'Onde habitam os ursos polares?',
                choices: [
                  'Polo norte', 'Polo sul', 'Oceania', 'Asia'
                ],
                correctAnswer: 'Polo norte'
              }
          ]
      }, {
          questions: [
              {
                  type: "radiogroup",
                  name: "pergunta5",
                  title: "Qual desses é considerado um dos maiores peixes de água doce?",
                  choicesOrder: "random",
                  choices: [
                      "Tambaqui", "Peixe-espada", "Pacu", "Pirarucu"
                  ],
                  correctAnswer: "Pirarucu"
              },
              {
                type: 'radiogroup',
                name: 'pergunta6',
                title: 'Qual é a maior baleia do mundo?',
                choices: [
                  'Baleia-cinzenta', 'Orca', 'Baleia-jubarte', 'Baleia-azul'
                ],
                correctAnswer: 'Baleia-azul'
              }
          ]
       }, 
      
        
    ],
      completedHtml: "<h4><b>{playerName}, voce acertou</b> <b>{correctedAnswers}</b> questoes de <b>{questionCount}</b>.\n <p>Obrigado por jogar!</p></h4>",
           
    };

  
   const onComplete = (survey, options) => {
    console.log(`Resultados do survey : ${survey.data}`);
   }

   var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
      defaultThemeColors["$main-color"] = "#347aeb";
      defaultThemeColors["$main-hover-color"] = "#345ceb";
      defaultThemeColors["$text-color"] = "#666";
      defaultThemeColors["$header-color"] = "#347aeb";

      defaultThemeColors["$header-background-color"] = "#ccc";
      defaultThemeColors["$body-container-background-color"] = "#f8f8f8";


  Survey.StylesManager.applyTheme()
  Survey.Survey.cssType = "";
  const model = new Survey.Model(json);

  

  model
    .onUpdateQuestionCssClasses
    .add(function (survey, options) {
        var classes = options.cssClasses

        classes.root = "sq-root";
        classes.title = "sq-title";
        classes.item = "sq-item";
        classes.label = "sq-label";

        if (options.question.isRequired) {
            classes.title = "sq-title sq-title-required";
            classes.root = "sq-root sq-root-required";
        }

        if (options.question.getType() === "radiogroup") {
          classes.title = "sq-check";
          classes.root = "sq-root sq-root-cb";
        }
    });

  

  return (
    <div className="app">
        <div className="header">
          <h3 className="title">Quizz sobre vida animal</h3>
        </div>
        <Survey.Survey model={model} onComplete={onComplete} />

    </div>
  );
}

export default Quizz;