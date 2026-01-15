export const AppUtils = {
radius: 4,
formatVnd(value: number) {
return new Intl.NumberFormat("vi-VN", {
style: "currency",
currency: "VND",
maximumFractionDigits: 0,
}).format(value);
},
};