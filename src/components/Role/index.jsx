import React from 'react'

export default function Role() {
    return (
        <div className="main-body">
            <div className="page-body">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <div className="page-header-breadcrumb">
                            <ul className="breadcrumb-title">
                                <li className="breadcrumb-item"><a href="/admin"> <i className="feather icon-home" /> Trang chủ
              </a></li>
                                <li className="breadcrumb-item"><a href="#!">Danh sách quyền</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card px-3">
                            <div className="card-header px-0 pb-2">
                                <h2 className="text-uppercase text-center">Danh sách quyền</h2>
                                <a href="role-add.html" className="btn btn-sm btn-primary">Thêm mới</a>
                            </div>
                            <div className="card-block table-border-style">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Tên Quyền</th>
                                                <th>Mô Tả</th>
                                                <th>Hành Động</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbodyRole">
                                            <tr>
                                                <th>1</th>
                                                <td>ROLE_ADMIN</td>
                                                <td>Quản trị</td>
                                                <td><a href="#" className="btn btn-sm btn-info btn-round py-1 font-weight-bold">Sửa</a>
                                                    <a href="#" className="btn btn-sm btn-danger btn-round py-1 font-weight-bold">Xóa</a>
                                                </td>
                                            </tr></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
