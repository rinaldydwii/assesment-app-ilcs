export default function handleError(error) {
    if (!error.response) {
        return "Terjadi kesalahan pada koneksi!";
    }
    else return error.response.data.message;
}