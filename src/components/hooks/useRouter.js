import {__RouterContext} from 'react-router';
const useReactRouter = () => {
    const forceUpdate = useForceUpdate();
    const routerContext = useContext(__RouterContext);
    /* TODO */
    return routerContext;
  };
  export default  useReactRouter;