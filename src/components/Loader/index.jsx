const Loader = ({ component, isLoading }) => {
    if (isLoading) {
        return <Loader />;
    }

    return { component };
};

export default Loader;
