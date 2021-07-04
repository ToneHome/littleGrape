import React from 'react';
import { Link } from 'react-router-dom';
function AppHeader() {
    let className = 'header'
    return (
        <header className={className}>
            <div className="logo">
                Little Grape
            </div>
            <nav>
                <Link to="/read">读取</Link>
                <Link to="/write">编写</Link>
            </nav>
        </header>
    )
}
export default AppHeader