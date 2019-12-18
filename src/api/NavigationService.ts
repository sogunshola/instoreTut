import { NavigationActions } from 'react-navigation';

let _navigate

function setTopLevelNavigator(ref: any) {
    _navigate = ref
}

function navigate(routeName: string, params?: any) {
    _navigate.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function back() {
    _navigate.dispatch(NavigationActions.back());
}

export const NavigationService = {
    navigate,
    back,
    setTopLevelNavigator,
    navigator: _navigate
};

/* function popToTop(immediate: boolean = true) {
    _navigate.dispatch({
        type: NavigationActions.POP_TO_TOP,
        immediate
    })
}

function reset({actions, index}) {
    _navigate.dispatch({
        type: NavigationActions.RESET,
        index,
        actions
    })
} */
