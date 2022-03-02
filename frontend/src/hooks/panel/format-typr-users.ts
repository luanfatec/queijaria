export function FormatTypeUser(type: number) {
    if (type === 0) {
        return "Administrador";
    }
    if (type === 1) {
        return "Vendedor";
    }
    if (type === 2) {
        return "Fornecedor";
    }
    return "Indefinido";
}