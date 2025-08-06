// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取当前时间
    const now = new Date();
    const dateString = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // 创建一个新元素显示当前时间
    const timeElement = document.createElement('div');
    timeElement.className = 'time-display';
    timeElement.innerHTML = `<p>当前时间: ${dateString}</p>`;
    
    // 将元素添加到页面中
    const container = document.querySelector('.container');
    container.insertBefore(timeElement, document.querySelector('.footer'));
    
    // 添加一个按钮来改变页面主题色
    const themeButton = document.createElement('button');
    themeButton.textContent = '切换主题';
    
    // 切换主题的功能
    let darkTheme = false;
    themeButton.addEventListener('click', function() {
        const body = document.body;
        
        if (darkTheme) {
            // 切换到亮色主题
            body.classList.remove('dark-theme');
            themeButton.textContent = '切换到暗色主题';
        } else {
            // 切换到暗色主题
            body.classList.add('dark-theme');
            themeButton.textContent = '切换到亮色主题';
        }
        
        darkTheme = !darkTheme;
    });
    
    // 将按钮添加到页面中
    container.insertBefore(themeButton, document.querySelector('.footer'));
});
