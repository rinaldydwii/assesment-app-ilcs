export default function handleError(error) {
    console.log(error);
    if (!error.response) {
        return "Terjadi kesalahan pada koneksi!";
    }
    else return error.response.data.message;
}