require('dotenv').config()
const axios = require('axios');

const FormData = require('form-data');
axios.defaults.headers.common['Authorization'] = process.env.MW_AUTH
console.log("process.env.MW_AUTH : ", process.env.MW_AUTH)
exports.MarkAsRead = (req, res) => {
    let url = process.env.MW_URL + "/api/CustomersAction/MarkAsDone"
    
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
exports.sendResetPasswordLinkMw = (req, res) => {
    let url = process.env.MW_URL + "/api/master_user/reset-password";
    return new Promise((resolve, reject) => {
        axios
            .post(url, req.body)
            .then(mwRes => {
                resolve(mwRes.data)
            })
    }
    )
}
exports.FilterReportStatusUpdated = (req, res) => {
    let url = process.env.MW_URL + "/api/View_COD_Report/FilterReportStatusUpdated"
    
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
    let url = process.env.MW_URL + "/api/View_CustomersActions/GetByIdM/" + id
    
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
exports.GetWhatsappLogs = (req, res) => {
    let id = req.params.id || 1
    let url = process.env.MW_URL + "/api/Whatsapp_Log/GetById/" + id
    
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

exports.GenerateTemuCodReport = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GenerateTemuCodReport"
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

exports.GetTemuCodHistory = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetTemuCodHistory"
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

exports.UploadTemuCodToSftp = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/UploadTemuCodToSftp"
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

exports.UploadTemuAddOnFileToSftp = (req, res) => {
    const form = new FormData();
    for (let i in req.files) {
        form.append(i, req.files[i].data, req.files[i].name)
    }
    
    let url = process.env.MW_URL + "/api/Custom/UploadTemuAddOnFileToSftp"
    axios
        .post(url, form)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data)
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response.status).json(error.response.data)
        });
};

exports.orderSettings = (req, res) => {
    let url = process.env.MW_URL + "/internal/settings/orders"
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
exports.updateSettings = (req, res) => {
    let url = process.env.MW_URL + "/internal/settings"
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

exports.GenerateTemuAdditionalReport = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GenerateTemuAdditionalReport"
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

exports.GetTemuAdditionalReportHistory = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetTemuAdditionalReportHistory"
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

exports.GetOrderStatusReport = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetOrderStatusReport"
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

exports.GetOrderStatusOverview = (req, res) => {
    let url = process.env.MW_URL + "/api/Custom/GetOrderStatusOverview"
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

exports.uploadTemuManifest = (req, res) => {
    let url = process.env.MW_URL + "/v2/temu-manifest/upload-manifest";
    let form = new FormData();
    for (let i in req.files) {
        form.append(i, req.files[i].data, req.files[i].name)
    }
    for (const [key, value] of Object.entries(req.body)) {
        form.append(key, value);
    }

    axios
        .post(url, form)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data);
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response?.status || 500).json(error.response?.data || { error: 'MW API error' });
        });
};

exports.listTemuManifestByStatus = (req, res) => {
    let url = process.env.MW_URL + "/v2/temu-manifest/list-by-status";
    console.log("url : ", req.query)
    axios
        .get(url, { params: req.query })
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data);
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response?.status || 500).json(error.response?.data || { error: 'MW API error' });
        });
};

exports.downloadTemuManifest = (req, res) => {
    let url = process.env.MW_URL + "/v2/temu-manifest/download";
    axios
        .get(url, { params: req.query, responseType: 'arraybuffer' })
        .then(mwRes => {
            res.set(mwRes.headers);
            res.status(mwRes.status).send(mwRes.data);
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response?.status || 500).json(error.response?.data || { error: 'MW API error' });
        });
};

exports.updateTemuManifestEvents = (req, res) => {
    let url = process.env.MW_URL + "/v2/temu-manifest/update-temu-manifest-events";
    axios
        .post(url, req.body)
        .then(mwRes => {
            res.status(mwRes.status).json(mwRes.data);
        })
        .catch(error => {
            console.log("error : ", error);
            res.status(error.response?.status || 500).json(error.response?.data || { error: 'MW API error' });
        });
};
