function PublishedDate(props) {
    const date = new Date(props.date)
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return <div>Publisehd on {date.toLocaleDateString(undefined, options)}</div>
}

export default PublishedDate;