import React from "react"
import {FaGithubSquare,FaNewspaper} from "react-icons/fa";
import {GrHeroku} from "react-icons/gr"

const ML_Projects_Data = [
    {
        id:1,
        title:'CancerNET',
        subtitle:'Web Application With Payment Integration',
        icons_link :['https://github.com/shahriya1995/CancerNET/blob/master/README.md','https://healthcare-ai.herokuapp.com/'],
        icons :[<FaGithubSquare size={49}></FaGithubSquare>,<GrHeroku size={55} style={{ fill: '#7673C0' }}/>],
        proj_title:'Breast Cancer Classification',
        quote:'Breast cancer is the most common form of cancer in women, and invasive ductal carcinoma (IDC) is the most common form of breast cancer. Accurately identifying breast cancer is an important clinical task, and automated methods can be used to save time and reduce error',
        p1:'The process that\'s used to detect breast cancer is time consuming and small malignant areas can be missed. In order to detect cancer, a tissue section is put on a glass slide. A pathologist then examines this slide under a microscope. The pathologist needs to visually scan large regions where there\'s no cancer in order to ultimately find malignant areas. Because these glass slides can now be digitized, computer vision can be used to speed up a pathologist\'s workflow and provide diagnosis support. By deploying a machine learning solution as a web app, it can be made available to medical personnel anywhere in the world for free',
        prob_intro:'The goal of this project is to create a web based tool that can  analyze histopathology image patches and predict if breast cancer is present. The web app will be able to detect one form of breast cancer: Invasive Ductal Carcinoma (IDC). It will predict if it is positive or negative.',
        src:['../../images/cancer-classify.png'],
        li:['Keras','Convolution Neural Network','Flask Framework','Heroku','Stripe Payment Integration'],
        proj_intro:'Introduction'

    },
    {
        id:2,
        title:'House Price Prediction',
        subtitle:'Using both Texual and Image Dataset Information',
        icons_link :['https://github.com/shahriya1995/HousePricePrediction/blob/master/README.md','https://github.com/shahriya1995/HousePricePrediction/blob/master/House%20Prediction%20using%20Both%20Images%20and%20Textual%20Information.pdf'],
        icons :[<FaGithubSquare size={49}></FaGithubSquare>,<FaNewspaper size={49}></FaNewspaper>],
        proj_title: 'Prediction Using Keras, Regression, and CNN',
        quote:'House market plays an important role in shaping the economy. Recent studies shows there has been increase in sales rate of houses. In this project we propose an automatic house price prediction that can help retailers and customers to make a decision.',
        p1:'The Keras Python library makes creating deep learning models fast and easy. The functional API in Keras is a way of creating models that offers a lot more flexibility, including creating more complex models. It specifically allows you to define multiple input or output models as well as models that share layers. More than that, it allows you to define ad hoc acyclic network graphs.',
        prob_intro:'The traditional methods involved use of textual information like area, its neighbourhood, no of bedrooms etc. In this project we propose finding an estimation using categorical, numerical as well as visual (images) dataset. We will make use of keras architecture that accepts multiple inputs and data. We will combine both textual and visual inputs and train a model which has input as mixed data.',
        src:['../../images/house.png','../../images/house-1.png'],
        li:['Keras Functional API','Convolution Neural Network','Reagression','Neural Networks'],
        proj_intro:'Introduction'


    },
    {
        id:3,
        title:'Image Classification',
        subtitle:'Using Tensorflow.js',
        icons_link :['https://github.com/shahriya1995/ImageClassification_UsingTensorflowJS'],
        icons :[<FaGithubSquare size={49}></FaGithubSquare>],
        proj_title: 'Web Application for Image Classification Model with Flask ',
        quote:'In this project we build a UI for Image Classification using PreTrainedModel MobileNet. We are using Tensorflow.js library to load a model and make prediction using javascript programming. When a user uploads an image in the website the image is transformed into a tensor and we pass that image into the model to make predictions.\n' +
            '\n' +
            'The output will be Predicted class Name and its probability.',
        p1:'',
        prob_intro: '',
        src:['../../images/image_classify.png'],
        li:['Tensorflow.js','PreTrained Model - MobileNET','Flask','Javascript Programming'],
        proj_intro:'UI for Image Classification'


    },


]


export default ML_Projects_Data;
