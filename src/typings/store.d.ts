declare namespace StoreInit {
  interface State {
    count: number
  }
  type DispatchMap = 'addCountPlay'
  type ActionMap = 'reduceCount'
  interface Dispatch {
    (arg1: DispatchMap): any 
  }
  interface Commit {
    (arg: ActionMap): any
  }
  interface Store {
    state: State,
    dispatch: Dispatch,
    commit: Commit,
  }
}
