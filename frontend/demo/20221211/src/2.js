import { createMachine } from "xstate"

const answeringMachine = createMachine({
  initial: "unanswered",
  states: {
    unanswered: {
      on: {
        ANSWER: { target: "answered" },
      },
    },
    answered: {
      type: "final",
    },
  },
})

const { initialState } = answeringMachine

console.log(initialState.done) // false

const answeredState = answeringMachine.transition(initialState, {
  type: "ANSWER",
})

console.log(answeredState.done) // true
