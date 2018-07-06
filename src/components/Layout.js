import React from 'react';
import cx from 'classnames';

const Layout = () => (
  <div id="wrapper">
    <div id="intro-container">
      <h1>Todo list</h1>
    </div>

    <div id="add-todo-container">
      <input className="add-todo" name="add-todo" type="text" />
      <button className="button">Create</button>
    </div>

    <div id="todos-list-container">
      <ul className="todos-list">
        {[...Array(9)].map((_, i) => (
          <li key={i} className={cx('todo', Math.floor(Math.random() * 2) === 1 && 'complete')}>
            <div className="checkbox-container">
              <svg className="tick-icon" viewBox="0 0 24 24">
                <path
                  d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                  fill="green"
                />
              </svg>
            </div>
            <p className="description">Task {i + 1}</p>
            <ul className="actions-container">
              <li className="action">
                <button className="delete-todo">
                  <svg className="cross-icon" viewBox="0 0 24 24">
                    <path
                      d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                      fill="#2d1812"
                    />
                  </svg>
                </button>
              </li>
              <li className="action">
                <div className="reorder-container">
                  <svg className="reorder-icon" x="0px" y="0px" viewBox="0 0 124 124">
                    <g>
                      <path
                        d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z"
                        fill="#2d1812"
                      />
                      <path
                        d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z"
                        fill="#2d1812"
                      />
                      <path
                        d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z"
                        fill="#2d1812"
                      />
                    </g>
                  </svg>
                </div>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>

    <div id="summary-container">
      <p>You have completed 9 out of 99 tasks</p>
    </div>
  </div>
);

export default Layout;
