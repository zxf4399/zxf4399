import { createMachine, interpret, assign } from "xstate"

const fetchUser = (userId) =>
  new Promise((resolve, reject) => {
    return reject("abc")
  })

const userMachine = createMachine({
  id: "user",
  initial: "idle",
  context: {
    userId: 42,
    user: undefined,
    error: undefined,
  },
  states: {
    idle: {
      on: {
        FETCH: { target: "loading" },
      },
    },
    loading: {
      invoke: {
        id: "getUser",
        src: (context, event) => fetchUser(context.userId),
        onDone: {
          target: "success",
          actions: assign({ user: (context, event) => event.data }),
        },
        onError: {
          target: "failure",
          actions: assign({ error: (context, event) => event.data }),
        },
      },
    },
    success: {},
    failure: {
      on: {
        RETRY: { target: "loading" },
      },
    },
  },
})

console.log(interpret(userMachine).start().send("FETCH"))
