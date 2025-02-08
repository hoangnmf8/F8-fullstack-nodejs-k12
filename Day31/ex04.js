const dataMenu = [
	{ id: 5, name: "Lập trình C++ cho người mới bắt đầu", slug: "/lap-trinh-c-cho-nguoi-moi-bat-dau", parentId: 4 },
	{ id: 4, name: "Lập trình C++", slug: "/lap-trinh-c", parentId: 3 },
	{ id: 1, name: "Trang chủ", slug: "/", parentId: 0 },
	{ id: 2, name: "Sản phẩm", slug: "/san-pham", parentId: 0 },
	{ id: 3, name: "Bài viết", slug: "/bai-viet", parentId: 0 },
];
// Từ dataMenu cho trước, xây dựng giao diện menu đa cấp.
/**
 * Cách 1:
 * Bước 1: Sắp xếp lại mảng theo parentID
 * Bước 2: Sử dụng vòng lặp hoặc đệ quy.
 */

/**
 * Cách 2:
 * Bước 1: Tạo mảng lồng nhau.
 * Bước 2: Duyệt mảng lồng nhau.
 */
