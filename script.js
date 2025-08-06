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
    timeElement.style.textAlign = 'center';
    timeElement.style.marginTop = '20px';
    timeElement.style.padding = '10px';
    timeElement.style.backgroundColor = '#e6f7ff';
    timeElement.style.borderRadius = '4px';
    
    // 将元素添加到页面中
    const container = document.querySelector('.container');
    container.insertBefore(timeElement, document.querySelector('.footer'));
    
    // 添加一个按钮来改变页面主题色
    const themeButton = document.createElement('button');
    themeButton.textContent = '切换主题';
    themeButton.style.display = 'block';
    themeButton.style.margin = '20px auto';
    themeButton.style.padding = '8px 16px';
    themeButton.style.backgroundColor = '#0366d6';
    themeButton.style.color = 'white';
    themeButton.style.border = 'none';
    themeButton.style.borderRadius = '4px';
    themeButton.style.cursor = 'pointer';
    
    // 切换主题的功能
    let darkTheme = false;
    themeButton.addEventListener('click', function() {
        const body = document.body;
        const container = document.querySelector('.container');
        
        if (darkTheme) {
            // 切换到亮色主题
            body.style.backgroundColor = 'white';
            body.style.color = '#333';
            container.style.backgroundColor = '#f9f9f9';
            document.querySelector('h1').style.color = '#0366d6';
            themeButton.textContent = '切换到暗色主题';
        } else {
            // 切换到暗色主题
            body.style.backgroundColor = '#2d333b';
            body.style.color = '#e6edf3';
            container.style.backgroundColor = '#22272e';
            document.querySelector('h1').style.color = '#58a6ff';
            themeButton.textContent = '切换到亮色主题';
        }
        
        darkTheme = !darkTheme;
    });
    
    // 将按钮添加到页面中
    container.insertBefore(themeButton, document.querySelector('.footer'));
});
