use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};

pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    // Calculate sums and return response
    let mut string_len = 0;
    let mut int_sum = 0;
    for data in request.data {
        match data {
            DataType::Text(string) => string_len += string.len(),
            DataType::Number(num) => int_sum += num,
        }
    }

    let response = DataResponse {
        string_len: string_len,
        int_sum: int_sum,
    };

    (StatusCode::OK, Json(response))
}

#[derive(Deserialize)]
#[serde(untagged)]
enum DataType {
    Text(String),
    Number(i64),
}

#[derive(Deserialize)]
pub struct DataRequest {
    // Add any fields here
    data: Vec<DataType>
}

#[derive(Serialize)]
pub struct DataResponse {
    // Add any fields here
    string_len: usize,
    int_sum: i64,
}
