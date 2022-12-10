import { Button } from "antd"
import { createMachine, interpret } from "xstate"

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = createMachine({
  id: "toggle",
  initial: "inactive",
  states: {
    inactive: { on: { TOGGLE: "active" } },
    active: { on: { TOGGLE: "inactive" } },
  },
})

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start()

function App() {
  return <Button onClick={() => toggleService.send("TOGGLE")}>TOGGLE</Button>
}

export default App
