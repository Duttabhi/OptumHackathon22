<template>
    <header style = "padding-top: calc(2rem + 0px);" class="masthead bg-secondary text-white text-center">
    <h2 style="color:red; padding-right:71%">Hello Steve!</h2>
    <div class="container d-flex align-items-center flex-column">
    <div class="dashboard">
        <div class="card-icon">
            <div class="card-icon-body">
                <div class="card-icon-i">
                    <i class="fa-thin fa-abacus"></i>
                </div>
                <h3 ><a style="color:blue;" href="https://www.optum.com" target="_blank">Wellness Programs</a></h3>
            </div>
        </div>
        <div class="card-icon">
            <div class="card-icon-body">
                <div class="card-icon-i">
                    <i class="fa-thin fa-abacus"></i>
                </div>
                <h3><a style="color:blue;" href="https://www.optum.com" target="_blank">Meditation Sessions</a></h3>
            </div>
        </div>
        <div class="card-icon">
            <div class="card-icon-body">
                <div class="card-icon-i">
                    <i class="fa-thin fa-abacus"></i>
                </div>
                <h3 ><a style="color:blue;" href="https://www.optum.com" target="_blank">Good Reads</a></h3>
            </div>
        </div>
        <div class="card-icon">
            <div class="card-icon-body">
                <div class="card-icon-i">
                    <i class="fa-thin fa-abacus"></i>
                </div>
                <h3 ><a style="color:blue;" href="https://www.optum.com" target="_blank">Pharmacy</a></h3>
            </div>
        </div>
        <div class="card-icon">
            <div class="card-icon-body">
                <div class="card-icon-i">
                    <i class="fa-thin fa-abacus"></i>
                </div>
                <h3 ><a style="color:blue;" href="https://www.optum.com" target="_blank">Practioners Near you</a></h3>
            </div>
        </div>
        <div class="table">
            <div class="table-head">
                <h3>Your Biometrics (HSID: MN001)</h3>
            </div>
            <div class="table-body">
                <div class="table-responsive">
                    <table>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Test Name</th>
                                <th>Test Value</th>
                                <th>Test Date</th>
                                <th>Disease</th>
                                <th>Age</th>
                                <th>Zip Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1</td><td>HEMOGLOBIN A1C </td><td>7.2</td><td>01/08/2017</td><td>Diabetes</td><td>25</td><td>3656874</td></tr>
                            <tr><td>2</td><td>HEMOGLOBIN A1C </td><td>6</td><td>02/12/2018</td><td>Diabetes</td><td>26</td><td>3656874</td></tr>
                            <tr><td>3</td><td>HEMOGLOBIN A1C </td><td>9.5</td><td>02/11/2019</td><td>Diabetes</td><td>27</td><td>3656874</td></tr>
                            <tr><td>4</td><td>HEMOGLOBIN A1C </td><td>10</td><td>12/11/2020</td><td>Diabetes</td><td>28</td><td>3656874</td></tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="card">
                <div class="num">Blood Pressure: 130/90 Hgmm</div>
            </div>
            <div class="card">
                <div class="num">Hemoglobin: 12.2 g/dL</div>
            </div>
            <div class="card">
                <div class="num">Blood Glucose: 110 mg/dL</div>
            </div>
        </div>
    </div>
    </div>
    </header>

</template>

<script>
export default {
    name: 'UserHead',
    props:{
       msguHead: String  
    }
}
</script>

<style scoped>
.dashboard{
    display: flex;
    flex-wrap: wrap;
}

.card-icon{
    flex: 1 1 18%;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62,85,120,.045);
    margin: 0 8px 30px;
}

.card-icon .card-icon-body{
    padding: 20px;
}

.card-icon-i{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color:#e5f4e7;
    margin: 0 auto;
    position: relative;
}

.card-icon .card-icon-body h3{
    text-align: center;
    margin-bottom: 0;
    margin-top: 10px;
    font-size: 18px;
    font-weight: 400;
}

.card-icon-i i{
    top: 50%;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 45px;
    color: #5DAE8B;
}

.table{
    flex: 0 1 58%;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62,85,120,.045);
    margin: 0 8px 30px;
}

.table-responsive {
    display: block;
    width: 100%;
    overflow-x: auto;
}

.table .table-head{
    border-bottom: 1px solid #eee;
    padding: 0 15px;
}

.table .table-body{
    padding: 25px;
}

.table .table-body table{
    width: 100%;
    border-collapse: collapse;
}

.table table thead tr th{
    padding: 0 10px;
    height: 50px;
    vertical-align: middle;
    color: #666;
    font-weight: 500;
    border-bottom-color: #e2e8f0;
    background-color: #f7f8f9;
    border-top-width: 1px;
    border-bottom-width: 1px;
}

.table tbody tr td, .table tbody tr th {
    padding: 10px;
    border-bottom: 1px solid #eee;
    vertical-align: middle;
    font-size: 14px;
    color: #212529;
    text-align: center;
}

.btn-group{
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn-group a{
    padding: 3px;
    width: 26px;
    height: 26px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    margin: 0 5px;
        color: #fff;
    background-color:#5dae8b;
    border-color: #5dae8b;
    border-radius: 0.375rem;
    font-weight: 500;
}

.btn-group a{
        text-align: center;
    line-height: 25px;
    display: block;
}

@media only screen and (max-width: 768px) {
    .table{
        flex: 1 1 100%;
        overflow-x: scroll;
    }
}

.cards{
    flex: 1 1 34%;
    flex-wrap: wrap;
}

.card{
    border-radius: 30px;
    border: 1px solid #deebfd;
    box-shadow: 0 3px 10px rgba(62,85,120,.045);
    margin: 0 8px 10px;
    position: relative;
    background-color: #5CAD8A;
    height: 100px;
    padding: 20px;
}

.card .icon {
    color: rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 38px;
    bottom: 69px;
    z-index: 1;
}

.card .icon i {
    font-size: 100px;
    line-height: 0;
    margin: 0;
    padding: 0;
    vertical-align: bottom;
}

.card .num, .card h3{
    position: relative;
    color: #fff;
    z-index: 5;
    margin: 0;
    padding: 0;
}

.card .num {
    font-size: 30px;
    font-weight: bold;
}

.card h3{
    margin-top: 10px;
    font-size: 20px;
    margin-left: 5px;
}

@media only screen and (max-width: 768px) {
    .cards{
        flex: 1 1 100%;
    }
    .card .icon {
        z-index: 0;
    }
    .card .num, .card h3 {
        z-index: 0;
    }
}
</style>