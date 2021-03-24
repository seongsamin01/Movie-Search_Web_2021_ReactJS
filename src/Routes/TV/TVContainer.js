import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "api";

export default class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    };

    async componentDidMount() {
        try {
            const topRated = await tvApi.topRated();
            const popular = await tvApi.popular();
            const airingToday = await tvApi.airingToday();
            console.log(topRated, popular, airingToday);
        } catch {
            this.setState({
                error:"Can't find TV information @_@;;;;;;;;;;;;"
            });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const {topRated, popular, airingToday, loading, error } = this.state;
        return(
            <TVPresenter
               topRated={topRated}
               popular={popular}
               airingToday={airingToday}
               loading={loading}
               error={error}
            />   
        )
    }
}