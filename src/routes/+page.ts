import { error } from "@sveltejs/kit";
import questions from "../assets/json/questions.json"

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    class Question {
        private id: number;

        private question: string;
        private answer: number;
        private options: string[];
        
        private image: string;

        constructor(id: number,
                    question: string,
                    answer: number,
                    options: string[],
                    image: string) {
                        
            this.id = id;

            this.question = question;
            this.answer = answer;
            this.options = options;
            
            this.image = image;

        }

        public getId(): number { return this.id; }

        public getQuestion(): string { return this.question; }
        public getOptions(): string[] { return this.options; }

        public checkAnswer(answer: number): Boolean { return this.answer == answer; }
        
        public getImage(): string { return this.image; }
    }

    class Questions {
        private amount: number = 60;

        private questions: Question[];
        private questionIds: number[];

        private currQuestion: number;

        constructor(amount?: number) {
            if (amount) this.amount = amount;

            this.questions = [];
            this.questionIds = [];

            this.currQuestion = 0;

            for (let i = 0; i < this.amount; i++) this.genQuestion();
        }

        private genQuestion() {
            let oldQuestion = questions[Math.floor(Math.random()*questions.length)];
            let image = fetch(`${params.}/images/${oldQuestion.image}`);
            console.log(image)
            while (this.questionIds.includes(Number(oldQuestion.id))) oldQuestion = questions[Math.floor(Math.random()*questions.length)];

            const question = new Question(Number(oldQuestion.id), oldQuestion.question, 0, oldQuestion.options, oldQuestion.image);

            this.questionIds.push(Number(oldQuestion.id));

            this.questions.push(question);
        }

        public getQuestion(): Question {
            return this.questions[this.currQuestion++];
        }
    }
}