const UserList = () => {
    return (
        <>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">メルアド</th>
                            <th scope="col" className="col-6">名前</th>
                            <th scope="col">操作</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <th scope="row">1</th>
                            <td>test1@demo</td>
                            <td>テスト１</td>
                            <td className="ms-auto">
                                <div className="d-flex flex-row">
                                    <button className="btn btn-outline-primary me-1">更新</button>
                                    <button className="btn btn-outline-primary">削除</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>test1@demo</td>
                            <td>テスト１</td>
                            <td>
                                <div className="d-flex flex-row">
                                    <button className="btn btn-outline-primary me-1">更新</button>
                                    <button className="btn btn-outline-primary">削除</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>test1@demo</td>
                            <td>テスト１</td>
                            <td>
                                <div className="d-flex flex-row">
                                    <button className="btn btn-outline-primary me-1">更新</button>
                                    <button className="btn btn-outline-primary">削除</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default UserList