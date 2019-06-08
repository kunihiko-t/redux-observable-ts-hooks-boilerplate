export * from 'react-redux'
declare module 'react-redux' {
    export function useDispatch();
    export function useSelector(selector: Function, equalityFn? : Function);
    export function shallowEqual(action: any);
}
