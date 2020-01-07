import React, { PureComponent } from 'react'

let quizData=require('./quiz_data.json')

class Quiz extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {quiz_position:1
            
        }
    }

    render() {
        return (
        <div>{quizData.quiz_questions[0].instruction_text}</div>
        )
    }
}

export default Quiz