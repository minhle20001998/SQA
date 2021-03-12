import React, { Component } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './Homestays.css'
import { getHomeStay, addHomeStay, editHomeStay, deleteHomeStay } from '../../utils/requestAPI/index';
import AddHomestayDialog from './AddHomestayDialog';
import EditHomestayDialog from './EditHomestayDialog';
import DeleteHomestayDialog from './DeleteHomestayDialog';



class Homestays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null,
            isOpenDialogAdd: false,
            isOpenDialogDelete: false,
            isOpenDialogEdit: false,
            editInfo: {
                id: "",
                catalogName: "",
                price: "",
                name: "",
                address: "",
                description: ""
            },
            columns: [
                { field: 'id', headerName: 'Homestay_ID', width: 120 },
                { field: 'catalog_name', headerName: 'Catalog name', width: 130 },
                { field: 'price', headerName: 'Price', width: 100 },
                {
                    field: 'name',
                    headerName: 'Name',
                    width: 150,
                },
                {
                    field: 'address',
                    headerName: 'Address',
                    width: 150,
                },
                {
                    field: 'description',
                    headerName: 'Description',
                    description: '',
                    sortable: false,
                    width: 200,

                },
                {
                    field: "Edit",
                    width: 100,
                    sortable: false,
                    renderCell: (params) => {
                        const { row } = params;
                        return (
                            <Button variant="contained" color="primary" onClick={() => this.handleToggleDialogEdit(row)} >
                                Edit
                            </Button>
                        )
                    }
                },
                {
                    field: "Delete",
                    width: 100,
                    sortable: false,
                    renderCell: (params) => {
                        const { row } = params;
                        return (
                            <Button variant="contained" color="secondary" onClick={() => this.handleToggleDialogDelete(row)}>
                                Delete
                            </Button>
                        )
                    }
                    
                },
            ],
            rows: [],
            currentData: null
        }
        this.handleToggleDialogAdd = this.handleToggleDialogAdd.bind(this);
        this.getIndex = this.getIndex.bind(this);
        this.getHomeStaysList = this.getHomeStaysList.bind(this);
        this.addNewHomeStay = this.addNewHomeStay.bind(this);
        this.handleToggleDialogDelete = this.handleToggleDialogDelete.bind(this);
        this.handleToggleDialogEdit = this.handleToggleDialogEdit.bind(this);
        this.editHomeStay = this.editHomeStay.bind(this);
        this.deleteHomeStay = this.deleteHomeStay.bind(this);
    }

    async getHomeStaysList() {
        const homeStayList = await getHomeStay();
        this.setState({
            rows: homeStayList.data.map((item) => ({ ...item, id: item._id }))
        })
    }

    async addNewHomeStay(data) {
        const result = await addHomeStay(data);
        this.handleToggleDialogAdd();
        this.getHomeStaysList();
    }

    async editHomeStay(data) {
        const result = await editHomeStay(data);
        this.handleToggleDialogEdit();
        this.getHomeStaysList();
    }

    async deleteHomeStay(data) {
        const result = await deleteHomeStay(data);
        this.handleToggleDialogDelete();
        this.getHomeStaysList();
    }

    componentDidMount() {
        this.getHomeStaysList();
    }

    getIndex(id) {
        const { rows } = this.state;
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].id == id) {
                return i;
            }
        }
    }

    handleToggleDialogAdd() {
        this.setState((currentState) => ({
            isOpenDialogAdd: !currentState.isOpenDialogAdd
        }));
    }

    handleToggleDialogDelete(row) {
        this.setState((currentState) => ({
            isOpenDialogDelete: !currentState.isOpenDialogDelete,
            selectedItem: row ? row : null
        }));
    }

    handleToggleDialogEdit(row) {
        this.setState((currentState) => ({
            isOpenDialogEdit: !currentState.isOpenDialogEdit,
            selectedItem: row ? row : null
        }))
    }
    render() {
        const { columns, rows, isOpenDialogAdd, isOpenDialogEdit, selectedItem, isOpenDialogDelete } = this.state;
        return <div className="admin-homestays" style={{ width: '100%' }}>
            {
                isOpenDialogAdd && <AddHomestayDialog
                    open={isOpenDialogAdd}
                    handleToggleDialogAdd={this.handleToggleDialogAdd}
                    addNewHomeStay={this.addNewHomeStay}
                    handleToggleDialogDelete={this.handleToggleDialogDelete}
                />
            }
            {
                isOpenDialogEdit && selectedItem && <EditHomestayDialog
                    open={isOpenDialogEdit}
                    handleToggleDialogAdd={this.handleToggleDialogAdd}
                    handleToggleDialogEdit={this.handleToggleDialogEdit}
                    selectedItem={selectedItem}
                    editHomeStay={this.editHomeStay}
                />
            }
            {
                isOpenDialogDelete && selectedItem && <DeleteHomestayDialog
                    open={isOpenDialogDelete}
                    handleToggleDialogDelete={this.handleToggleDialogDelete}
                    selectedItem={selectedItem}
                    deleteHomeStay={this.deleteHomeStay}
                />
            }
            <Sidebar />
            <div className="main-view">
                <Navbar />
                <header>
                    <div>
                        <h4 className="welcome-header">Hi, Welcome back!</h4>
                        <h4>All Homestays</h4>
                    </div>
                    <div onClick={this.handleToggleDialogAdd}>
                        <i className="fas fa-plus-circle"></i>
                    </div>
                </header>
                <section id="homestays-statistic">
                    <DataGrid
                        className="datagrid"
                        sortingOrder={['desc', 'asc', null]}
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        autoHeight
                        disableColumnMenu={true}
                        disableColumnSelector={true}
                        disableSelectionOnClick={true}
                        style={{ border: '1px solid black' }}
                    />
                </section>
            </div>
        </div>
    }
}

export default Homestays;