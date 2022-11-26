import React from 'react';

const Blog = () => {
    return (
        <div className='my-10 '>
            <div className='text-center'>
                <h1 className='text-4xl text-primary font-bold mb-2'>Some Questions</h1>
                <p className='text-xl text-neutral'>Here are some question with answeres about React.</p>
            </div>

            {/* Question One */}
            <div className='bg-warning bg-opacity-20 w-9/12 my-10 mx-auto py-10 px-20 rounded-2xl'>
                <h2 className='text-2xl text-accent mb-5'>Q.1 What are the different ways to manage a state in a React application?</h2>
                <p className='text-lg'>Ans: There are four main types of state you need to properly manage in your React apps.</p>
                <ol className='text-lg'>
                    <li>(1) Local state</li>
                    <li>(2) Global state</li>
                    <li>(3) Server state</li>
                    <li>(4) URL state</li>
                </ol>
            </div>


            {/* Question Two */}
            <div className='bg-warning bg-opacity-20 w-9/12 my-10 mx-auto py-10 px-20 rounded-2xl'>
                <h2 className='text-2xl text-accent mb-5'>Q.2 How does prototypical inheritance work?</h2>
                <p className='text-lg'>Ans:  It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.</p>
            </div>

            {/* Question Three */}
            <div className='bg-warning bg-opacity-20 w-9/12 my-10 mx-auto py-10 px-20 rounded-2xl'>
                <h2 className='text-2xl text-accent mb-5'>Q.3 What is a unit test? Why should we write unit tests?</h2>
                <p className='text-lg'>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>

            {/* Question Four */}
            <div className='bg-warning bg-opacity-20 w-9/12 my-10 mx-auto py-10 px-20 rounded-2xl'>
                <h2 className='text-2xl text-accent mb-5'>Q.4 React vs. Angular vs. Vue?</h2>
                <p className='text-lg'>Ans: Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>


        </div>
    );
};

export default Blog;