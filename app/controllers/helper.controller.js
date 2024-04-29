require('dotenv').config()
const axios = require('axios');

const FormData = require('form-data');
axios.defaults.headers.common['Authorization'] = process.env.MW_AUTH
console.log("process.env.MW_AUTH : ", process.env.MW_AUTH)
exports.MarkAsRead = (req, res) => {
    let url = process.env.MW_URL + "/api/CustomersAction/MarkAsDone"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.GetAllHubs = (req, res) => {
    let url = process.env.MW_URL + "/api/Depots/GetAll"
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });


}
exports.MarkAsreject = (req, res) => {
    let url = process.env.MW_URL + "/api/CustomersAction/MarkAsreject"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.OrderTransactionTypesGetAll = (req, res) => {
    let url = process.env.MW_URL + "/api/OrderTransactionTypes/GetAll"
    console.log("url : ", url)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.GetAllOPSPagingFilter = (req, res) => {
    let url = process.env.MW_URL + "/api/View_CustomersActions/GetAllOPSPagingFilter"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.FilterReportStatusUpdated = (req, res) => {
    let url = process.env.MW_URL + "/api/View_COD_Report/FilterReportStatusUpdated"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.ShipmentReportFilterReportStatusUpdated = (req, res) => {
    let url = process.env.MW_URL + "/api/ShipmentReport/FilterReportStatusUpdated"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.ImportCustomerRequests = (req, res) => {
    let url = process.env.MW_URL + "/api/CustomersAction/ImportCustomerRequests"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.AddCall = (req, res) => {
    let url = process.env.MW_URL + "/api/CustomersAction/AddCall"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.GetAllOPSDonePagingFilter = (req, res) => {
    let url = process.env.MW_URL + "/api/View_CustomersActions/GetAllOPSDonePagingFilter"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.GetAllOnHoldPaginationExternalupdate = (req, res) => {
    let url = process.env.MW_URL + "/api/ShipmentReport/GetAllOnHoldPaginationExternalupdate"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.GetAllPagingFilter = (req, res) => {
    let url = process.env.MW_URL + "/api/View_CustomersActions/GetAllPagingFilter"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.AddAction = (req, res) => {
    let id = req.params.id || 1
    let url = process.env.MW_URL + "/api/CustomersAction/AddAction/"+id
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.SelfCollectRequest = (req, res) => {
    let url = process.env.MW_URL + "/api/CustomersAction/SelfCollectRequest"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.EditAddress = (req, res) => {
    let url = process.env.MW_URL + "/api/CustomersAction/EditAddress"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.EditPhone = (req, res) => {
    let url = process.env.MW_URL + "/api/CustomersAction/EditPhone"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.getDummy = (req, res) => {
    return res.status(200).json({ data: [] })

}
exports.GetAllOnHoldGroupBy = (req, res) => {
    let id = req.params.id || 1
    let url = process.env.MW_URL + "/api/ShipmentReport/GetAllOnHoldGroupBy/" + id
    console.log("url : ", url)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });


}
exports.GetSmsLogById = (req, res) => {
    let id = req.params.id || 1
    let url = process.env.MW_URL + "/api/SMS_Log/GetById/" + id
    console.log("url : ", url)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });


}
exports.GetClientAllPagination = (req, res) => {
    let PageNumber = req.query.PageNumber || 1
    let PageSize = req.query.PageSize || 5
    let url = process.env.MW_URL + "/api/Client/GetAllPagination?PageNumber=" + PageNumber + "&PageSize=" + PageSize
    console.log("url : ", url)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });


}
exports.CustomerActionById = (req, res) => {
    let id = req.params.id || 1
    let url = process.env.MW_URL + "/api/View_CustomersActions/GetById/" + id
    console.log("url : ", url)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });


}
exports.GetByTracking = (req, res) => {
    let id = req.params.id || 1
    let url = process.env.MW_URL + "/api/Orders/GetByTracking/" + id
    console.log("url : ", url)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });


}
exports.GetShipmentByTrackingNo = (req, res) => {
    let id = req.params.id || 1
    let url = process.env.MW_URL + "/api/ShipmentReport/GetByTrackingNo/" + id
    console.log("url : ", url)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.MerchantNames = (req, res) => {
    let url = process.env.MW_URL + "/api/Client/MerchantNames"
    console.log("url : ", url)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}
exports.GetAllPaginationExternalupdate = (req, res) => {
    let url = process.env.MW_URL + "/api/ShipmentReport/GetAllPaginationExternalupdate"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {
            console.log(mwRes)
            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });

}


exports.ImportCustomDuty = (req, res) => {
    const form = new FormData();
    for (let i in req.files) {
        form.append(i, req.files[i].data, req.files[i].name)
    }
    
    for (const [key, value] of Object.entries(req.body)) {
        form.append(key, value);
    }

    let url = process.env.MW_URL + "/api/Custom/ImportCustomDuty"
    axios
        .post(url, form)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}

exports.GenerateInvoiceXml = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GenerateInvoiceXml"
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}

exports.GetCustomDutyReport = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetCustomDutyReport"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}

exports.GetMasterData = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetMasterData"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}

exports.UploadCustomDutyToErp = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/UploadCustomDutyToErp"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}

exports.UploadInvoiceXmlToAmazon = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/UploadInvoiceXmlToAmazon"
    console.log("url : ", url)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}

exports.GetAmazonInvoiceHistory = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetAmazonInvoiceHistory"
    console.log("url : ", req.body)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}

exports.GenerateCn35Bill = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GenerateCn35Bill"
    console.log("url : ", req.body)
    axios
        .post(url, req.body)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}
exports.GetEventsStatusCodes = (req, res) => {
    let url = process.env.MW_URL + "/v2/codes"
    console.log("url : ", req.body)
    axios
        .get(url)
        .then(mwRes => {

            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}
exports.ImportIntlCustomDuty = (req, res) => {
    const form = new FormData();
    for (let i in req.files) {
        form.append(i, req.files[i].data, req.files[i].name)
    }

    for (const [key, value] of Object.entries(req.body)) {
        form.append(key, value);
    }

    let url = process.env.MW_URL + "/api/Custom/ImportIntlCustomDuty"
    axios
        .post(url, form)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
}
exports.createMasterUsersMw = (payload) => {
    let url = process.env.MW_URL + "/api/user/save"
    console.log("url : ", url)
    console.log("payload : ", payload)
    axios
        .post(url, payload)
        .then(mwRes => {

           console.log(mwRes)
        })
        .catch(error => {
            console.log(error)
        });
 }


 exports.InsertFlightArrivalDetail = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/InsertFlightArrivalDetail"
    console.log("url : ", req.body)
    axios
        .post(url, req.body)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
};

exports.UpdateFlightArrivalDetail = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/UpdateFlightArrivalDetail"
    console.log("url : ", req.body)
    axios
        .post(url, req.body)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
};

exports.GetFlightArrivalDetails = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetFlightArrivalDetails"
    console.log("url : ", req.body)
    axios
        .post(url, req.body)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
};

exports.GetFlightArrivalReport = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetFlightArrivalReport"
    console.log("url : ", req.body)
    axios
        .post(url, req.body)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
};
