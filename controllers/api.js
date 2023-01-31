const Question = require('../models/Question')

module.exports = {
  getApi: async (req,res)=>{
        try{
            const questions = await Question.find()
            res.json(questions)
        }catch(err){
            console.log(err)
        }
    },
    getApiRandom: async (req, res)=>{
        try{
            const questions = await Question.find()
            const random = Math.ceil(Math.random()*100)-1
            res.json(questions[random])
        }catch(err){
            console.log(err)
        }
    },
    getGovernment: async (req, res)=>{
        try{
            const questions = await Question.find({topic:"American Government"})
            res.json(questions)
        }catch(err){
            console.log(err)
        }
    },
    getGovernmentRandom: async (req, res)=>{
        try{
            const questions = await Question.find({topic:"American Government"})
            const random = Math.ceil(Math.random()* questions.length) - 1
            res.json(questions[random])
        }catch(err){
            console.log(err)
        }
    },
    getHistory: async (req, res)=>{
      try{
        const questions = await Question.find({topic:"American History"})
        res.json(questions)
      }catch(err){
          console.log(err)
      }
  },
  getHistoryRandom: async (req, res)=>{
      try{
        const questions = await Question.find({topic:"American History"})
        const random = Math.ceil(Math.random()* questions.length) - 1
        res.json(questions[random])
      }catch(err){
          console.log(err)
      }
  },
  getCivics: async (req, res)=>{
    try{
        const questions = await Question.find({topic:"Integrated Civics"})
        res.json(questions)
    }catch(err){
        console.log(err)
    }
},
getCivicsRandom: async (req, res)=>{
    try{
        const questions = await Question.find({topic:"Integrated Civics"})
        const random = Math.ceil(Math.random()* questions.length) - 1
        res.json(questions[random])
        
    }catch(err){
        console.log(err)
    }
}
}  