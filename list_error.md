1. file App.js , config thiếu file nên sai

sửa lỗi

- đầu tiên, mình cần đặt 1 giá trị dùng chung cho tên màn hình
=> mình tạo file constants/router.js
=> trong file router.js, mình tạo một biết contants SCREEN_NAMES => mục đích, khi tên màn hình thay đổi, mình chỉ cần đổi ở giá trị hằng số, tức constants

- sau đó, mình cần điều chỉnh về vị trí file màn hình
Tại sao file App.js, file màn hình splash không có định nghĩa từ đầu thì thêm vào phần stack màn hình làm gì nhỉ ??? => các màn hình nào được tạo thì thêm vào được, còn lại là sẽ sai ^^

ở file App.js

 <!-- <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />-->
Stack.Navigator: được hiểu là mình tạo ra 1 nhóm màn hình,
Stack.Screen: các màn hình trong nhóm Navigator mình định nghĩa ở trên

trong Stack.Screen, mình có 2 tham số chú ý bắt buộc điền

1. name: tức tên màn hình, nhận giá trị là chuổi - '',
2. component: tức màn hình mình định nghĩa trong folder screens/
Ở ví dụ trên, mình có màn hình tên là 'Home Screen', component là màn hình HomeScreen, 2 giá trị trên mình cần import từ các folder khác vào để dùng
