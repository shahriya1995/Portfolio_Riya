// import {FaGithubSquare} from "react-icons/fa/index";
// import {GrHeroku} from "react-icons/gr/index";
import {CgWebsite} from "react-icons/cg"
import React from "react";

const Featured_projects_data = [
    {
        id:1,
        src:'../../images/B.png',
        text:'Blockhain Based Decentralized Freelancing Application',
        path:'/services',
        icons_link :['http://csus-dspace.calstate.edu/bitstream/handle/10211.3/216863/Blockchain%20Based%20Decentralized%20Freelancing%20Application.pdf?sequence=1'],
        icons :[<CgWebsite />],
        // alt:'Blockchain image'
        // subtitle:"Create a decentralized freelancing application using Blockchain that can make freelancing faster without having any third authority to control the system ",
        p1 :"In digital freelancing, organizations and companies hire potential employees on a contract basis to work on certain projects. Existing freelancing systems are usually centralized. They are implemented through centralized systems based on client-server model. Issues that originate with the use of centralized freelancing systems include high fees for freelancers and their clients, unfair treatment to user accounts, lack of fairness for clients and freelancers, payment delays, compromised trust between freelancers and clients due to involvement of third-party platforms.",
        p2 :"In this project, we propose a blockchain-based decentralized freelancing system. A decentralized freelancing system is a type of freelancing system in which there is no centralized platform that controls the interaction between the freelancers and their clients. Our decentralized system is an online platform built on Ethereum. It offers an innovative approach for clients and freelancers to interact and work through smart contracts.",
        li : ['Ethereum Blockchain','InterPlantary File System(IPFS)','Truffle','Ganache','MetaMask','Web3.js','Solidity Programming'],
        o1:'USERS IN THE SYSTEM.',
        o1_data:'The freelancing platform provides a simple, user-friendly interface to perform activities. The two significant entities that will take part in this project are clients and freelancers.',
        f1:'FREELANCER',
        f1_data:'A freelancer can create a profile with his/her detailed description. A freelancer can view the job postings, bid for the interested jobs, submit the task if selected by the client, get paid once the job gets completed.',
        f2:'Client',
        f2_data:'A client can create a profile with his/her detailed description, post jobs on the web app, view profiles of freelancers, view bids and freelancer proposals for specific jobs, hire a freelancer that is suitable for the job, keep track of the progress, pay the freelancer once the job gets completed.',
        sm:'SMART CONTRACTS',
        sm_data:'In Ethereum blockchain, all the business logic code is written in smart contracts. Smart contracts automatically execute when predefines rules stored in the contract are met. Smart contracts are used to exchange transactions between disparate parties without the requirement of central authority. Solidity programming language is used to write smart contracts. In this project, we have created five types of smart contracts.',
        sm1:['USER CONTRACT','JOB LIST CONTRACT','BIDDING CONTRACT','AGREEMENT CONTRACT','SUBMISSION CONTRACT']


    },

    {
        id:2,
        src:'../../images/bidops.png',
        text:'Bidops - Online Bid Submission System',
        path:'/services',
        icons_link :['https://drive.google.com/file/d/1JXz1WA0mRzBJbyyQkufHo-5tNJcw7Hyi/view?usp=sharing'],
        icons :[<CgWebsite/>],
        subtitle: 'CalPERS Sponsor Project',
        p1:"The project was introduced by a client in CalPERS. Objective is to develop an automated system which will ease the bid submission process. This will help to put a robust system in place which reduces human efforts and have\n" +
            "efficient paperless system.",
        p2:"In addition to that such automation will increase efficiency to handle multiple bidding\n" +
            "projects, transparency will help to identify key parts of the process and confidentiality in\n" +
            "handling bidder’s private documents.",
        li : ['Laravel(PHP)','HTML5','CSS3','Bootstrap','Javascript','MYSQL Workbench'],
        o1:'SCOPE OF THE PROJECT :- ',
        o1_data: '',
        f1:'',
        f1_data: 'Integrate the new system with the current existing online process. This project will include new modules to login into the system, submit bid proposals\n' +
            'online, conducting preliminary and secondary evaluation and to publish memo.',
        f2:'',
        f2_data: 'The system does not make firm decisions to reject the bidder on any basis. The decision to check if a bidder pass or fail depends on the inputs provided by the\n' +
            'designated decision team at CalPERS at every stage.',
        sm:'FEATURES :- ',
        sm_data:'Users in the System- Admin(Author) and User(Bidder)',
        sm1:['Author Authentication and Personalized Dashboard','Add Solicitations and Documents','Review Bids and Award','Author Authentication and Personalized Dashboard','View Bid Opportunities','Upload Bider Proposals and Documents','Evaluation Phase']

    },

    {
        id:3,
        src:'../../images/Smart_buy.png',
        text:'Smart Buy',
        path:'/services',
        icons_link :['http://www.ijsrp.org/research-paper-0516/ijsrp-p53102.pdf'],
        icons :[<CgWebsite/>],
        subtitle: 'Comparison of E-commerce Products using web mining',
        p1:"Web mining is an application data-mining technique used to extract information from web services. E-commerce websites nowadays have become one of the most important sources for buying all kinds of products. Many strategies have been developed by analyzing customer’s behavior so as to attract more business and participation of people. As there are many ecommerce websites available it becomes difficult for users to choose best deal for desired product amongst these websites. .",
        p2:"Comparison of E-commerce products using web mining enables\n" +
            "users to analyze prices and get desired product at minimum price.\n" +
            "Users can also select multiple products that belong to same\n" +
            "category for comparing its features. To obtain best deals from ecommerce websites web crawlers and web scrapping techniques\n" +
            "are used to fetch detailed information. This way, project aims to\n" +
            "provide solution for online customers to buy products at good\n" +
            "deal and save their valuable time, effort and money.",
        li : ['Django (Python) Framework','HTML5','CSS3','Bootstrap','Javascript','MongoDB','Web Scrapper (Beautiful Soup)','Web Crawler'],
        o1:'SCOPE OF THE PROJECT :- ',
        o1_data: '',
        f1:'',
        f1_data: 'Integrate the new system with the current existing online process. This project will include new modules to login into the system, submit bid proposals\n' +
            'online, conducting preliminary and secondary evaluation and to publish memo.',
        f2:'',
        f2_data: 'The system does not make firm decisions to reject the bidder on any basis. The decision to check if a bidder pass or fail depends on the inputs provided by the\n' +
            'designated decision team at CalPERS at every stage.',
        sm:'FEATURES :- ',
        sm_data:'Users in the System- Admin(Author) and User(Bidder)',
        sm1:['Author Authentication and Personalized Dashboard','Add Solicitations and Documents','Review Bids and Award','Author Authentication and Personalized Dashboard','View Bid Opportunities','Upload Bider Proposals and Documents','Evaluation Phase']

    },





]
export default Featured_projects_data;
