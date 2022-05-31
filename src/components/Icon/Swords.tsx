import React from "react";

import './Swords.scss';

export function SwordsGroup({ fill, stroke }: { fill?: string, stroke?: string }) {
  const fillColor = fill ?? 'black';
  const strokeColor = stroke ?? 'white';
  return (
    <g transform="matrix(0.781487, 0, 0, 0.781487, 3.512721, 6.532624)" className="ccwc-svgicon-group ccwc-svgicon-group--swords">
      <title>Swords</title>
      <g className="right">
        <title>Right Sword</title>
        <g>
          <title>Blade</title>
          <path d="M 16.791 18.533 C 16.926 18.302 17.156 18.185 17.329 17.999 C 17.409 17.92 17.486 17.862 17.592 17.815 C 17.706 17.781 17.695 17.641 17.82 17.56 C 18.048 17.421 18.198 17.164 18.45 17.037 C 18.589 16.969 18.552 16.748 18.737 16.737 C 18.976 16.482 19.295 16.33 19.501 16.041 C 19.629 15.841 19.811 15.714 19.969 15.565 C 20.074 15.471 20.269 15.471 20.281 15.322 C 20.302 15.159 20.533 15.206 20.495 15.031 C 20.715 14.997 20.76 14.754 20.943 14.694 C 21.15 14.626 21.218 14.393 21.425 14.336 C 21.607 14.277 21.63 14.023 21.779 13.896 C 21.859 13.836 21.905 13.744 21.984 13.686 C 22.409 13.396 22.785 13.06 23.048 12.62 C 23.231 12.583 23.208 12.318 23.415 12.305 C 23.598 12.074 23.907 11.983 24.033 11.715 C 24.101 11.715 24.158 11.703 24.216 11.703 C 24.352 11.471 24.582 11.355 24.776 11.216 C 24.97 11.089 25.12 10.949 25.234 10.764 C 25.257 10.728 25.268 10.695 25.302 10.671 C 25.738 10.403 26.092 10.056 26.459 9.708 C 26.904 9.29 27.397 8.92 27.796 8.456 C 27.899 8.337 28.036 8.236 28.175 8.143 C 28.312 8.051 28.493 7.982 28.587 7.817 C 28.769 7.493 29.044 7.226 29.19 6.786 C 29.19 6.67 29.214 6.472 29.261 6.263 C 29.318 5.972 29.296 5.671 29.273 5.369 C 29.251 5.081 29.386 4.803 29.363 4.512 C 29.339 4.129 29.352 3.747 29.363 3.365 C 29.363 2.981 29.501 2.598 29.444 2.205 C 29.444 2.193 29.444 2.169 29.444 2.16 C 29.605 1.904 29.501 1.577 29.535 1.287 C 29.4 1.148 29.285 1.032 29.158 0.906 C 28.906 0.871 28.633 0.964 28.403 0.801 C 28.381 0.824 28.357 0.847 28.335 0.871 C 28.321 0.884 28.312 0.893 28.299 0.893 C 27.785 0.893 27.258 0.893 26.744 0.893 C 26.652 0.893 26.584 0.871 26.526 0.814 C 26.516 0.801 26.504 0.814 26.459 0.814 C 26.412 0.942 26.298 0.906 26.183 0.893 C 25.566 0.861 24.937 0.988 24.329 0.814 C 24.252 0.788 24.158 0.814 24.079 0.814 C 23.999 0.814 23.873 0.788 23.837 0.837 C 23.759 0.942 23.62 0.847 23.574 0.93 C 23.506 1.044 23.461 0.884 23.393 0.93 C 23.175 1.079 22.911 1.079 22.671 1.067 C 22.555 1.185 22.477 1.334 22.362 1.37 C 22.202 1.428 22.224 1.624 22.1 1.637 C 21.892 1.672 21.859 1.845 21.803 1.972 C 21.688 2.228 21.435 2.692 21.253 2.762 C 21.128 2.807 21.046 2.898 20.967 2.981 C 20.806 3.153 20.589 3.271 20.52 3.515 C 20.269 3.619 20.132 3.828 19.983 4.047 C 19.834 4.28 19.572 4.41 19.433 4.676 C 19.387 4.778 19.251 4.813 19.17 4.941 C 19.056 5.137 18.896 5.325 18.723 5.475 C 18.574 5.601 18.472 5.776 18.334 5.916 C 18.209 6.055 18.141 6.254 18.048 6.436 C 17.866 6.472 17.706 6.577 17.592 6.738 C 17.486 6.89 17.339 6.994 17.248 7.144 C 17.018 7.515 16.698 7.794 16.401 8.108 C 16.401 8.165 16.401 8.223 16.401 8.27 C 16.323 8.409 16.127 8.397 16.048 8.538 C 15.874 8.85 15.601 9.058 15.361 9.315 C 15.28 9.396 15.234 9.545 15.177 9.569 C 15.04 9.614 14.925 9.708 14.903 9.802 C 14.8 10.126 14.537 10.31 14.333 10.543 C 14.227 10.659 14.102 10.754 14.067 10.903 C 14.022 11.089 13.886 11.227 13.759 11.274 C 13.586 11.343 13.553 11.471 13.472 11.588 C 13.335 11.821 13.256 12.074 12.969 12.176 C 12.867 12.365 12.614 12.387 12.522 12.583 C 12.316 13.013 11.952 13.303 11.597 13.593 C 11.597 13.639 11.597 13.675 11.597 13.755 C 11.185 14.069 10.944 14.531 10.567 14.872 C 10.465 14.962 10.349 15.053 10.259 15.159 C 10.005 15.437 9.79 15.762 9.56 16.053 C 9.215 16.482 8.818 16.877 8.45 17.282 C 8.254 17.5 8.151 17.769 8.165 18.059 C 8.187 18.359 8.223 18.685 8.461 18.906 C 8.724 19.148 8.929 19.462 9.252 19.634 C 9.309 19.671 9.388 19.727 9.4 19.788 C 9.433 19.937 9.549 20.019 9.641 20.111 C 10.086 20.564 10.533 21.003 10.967 21.47 C 11.196 21.71 11.461 21.874 11.757 22.015 C 12.188 22.222 12.614 22.13 12.981 21.874 C 13.278 21.678 13.565 21.47 13.782 21.167 C 13.85 21.073 13.953 21.003 14.057 20.935 C 14.261 20.809 14.469 20.668 14.629 20.469 C 14.698 20.389 14.753 20.274 14.881 20.262 C 15.005 20.262 14.914 20.1 15.017 20.087 C 15.132 20.075 15.2 20.019 15.212 19.915 C 15.221 19.788 15.395 19.866 15.382 19.775 C 15.361 19.611 15.508 19.682 15.565 19.6 C 15.794 19.242 16.08 18.929 16.481 18.764 C 16.62 18.708 16.732 18.638 16.791 18.533 Z" fill={fillColor} />
        </g>
        <g>
          <title>Hilt</title>
          <path d="M 11.437 22.734 C 11.237 22.534 10.997 22.384 10.847 22.144 C 10.747 21.994 10.567 21.934 10.487 21.894 C 10.337 21.734 10.277 21.604 10.147 21.494 C 9.937 21.324 9.747 21.124 9.577 20.894 C 9.397 20.654 9.147 20.454 8.907 20.244 C 8.627 20.004 8.327 19.764 8.087 19.464 C 7.897 19.224 7.657 19.024 7.447 18.814 C 7.357 18.724 7.247 18.644 7.227 18.494 C 6.987 18.554 6.797 18.494 6.607 18.364 C 6.537 18.554 6.387 18.644 6.247 18.744 C 5.927 18.984 5.717 19.334 5.447 19.624 C 5.337 19.734 5.217 19.894 5.257 20.094 C 5.257 20.114 5.217 20.144 5.177 20.194 C 5.437 20.254 5.407 20.564 5.657 20.654 C 5.857 20.724 5.917 20.984 6.077 21.134 C 6.247 21.284 6.467 21.374 6.597 21.584 C 6.537 21.984 6.127 22.144 5.957 22.484 C 5.907 22.484 5.857 22.484 5.817 22.484 C 5.597 22.704 5.387 22.924 5.167 23.134 C 4.957 23.334 4.767 23.554 4.537 23.734 C 4.317 23.914 4.117 24.124 3.897 24.314 C 3.647 24.214 3.237 24.224 2.957 24.294 C 2.817 24.334 2.677 24.424 2.517 24.384 C 2.417 24.544 2.237 24.564 2.087 24.594 C 1.907 24.644 1.767 24.744 1.657 24.884 C 1.547 25.024 1.477 25.184 1.297 25.244 C 1.337 25.404 1.147 25.324 1.117 25.424 C 1.087 25.514 1.047 25.594 1.007 25.674 C 0.987 25.704 0.967 25.734 0.937 25.754 C 0.757 25.884 0.677 26.084 0.557 26.324 C 0.547 26.414 0.607 26.574 0.477 26.684 C 0.497 26.754 0.567 26.764 0.557 26.824 C 0.427 27.064 0.467 27.304 0.517 27.554 C 0.567 27.784 0.637 28.014 0.697 28.244 C 0.757 28.474 0.837 28.684 1.007 28.854 C 1.187 29.034 1.387 29.204 1.547 29.404 C 1.667 29.544 1.857 29.574 1.987 29.684 C 2.197 29.644 2.357 29.794 2.547 29.844 C 2.657 29.874 2.767 29.904 2.887 29.904 C 3.027 29.904 3.157 29.904 3.297 29.834 C 3.447 29.764 3.577 29.954 3.737 29.904 C 3.817 29.884 3.897 29.904 3.967 29.844 C 4.017 29.804 4.127 29.824 4.187 29.824 C 4.347 29.684 4.467 29.544 4.647 29.454 C 4.817 29.374 4.997 29.274 5.087 29.124 C 5.177 28.974 5.277 28.834 5.377 28.694 C 5.467 28.554 5.497 28.384 5.567 28.224 C 5.697 27.914 5.737 27.584 5.837 27.274 C 5.857 27.214 5.857 27.114 5.817 27.064 C 5.757 26.994 5.787 26.964 5.837 26.934 C 5.767 26.884 5.767 26.824 5.767 26.744 C 5.767 26.674 5.797 26.594 5.737 26.534 C 5.727 26.514 5.707 26.504 5.697 26.474 C 6.047 26.174 6.287 25.764 6.637 25.464 C 6.667 25.434 6.637 25.364 6.697 25.344 C 6.747 25.344 6.787 25.344 6.837 25.344 C 6.917 25.264 6.987 25.174 7.077 25.114 C 7.167 25.044 7.147 24.874 7.307 24.884 C 7.317 24.824 7.317 24.764 7.327 24.714 C 7.597 24.624 7.777 24.424 7.997 24.274 C 8.237 24.114 8.337 23.814 8.587 23.634 C 8.707 23.754 8.827 23.864 8.927 23.984 C 9.027 24.094 9.157 24.154 9.247 24.284 C 9.327 24.394 9.407 24.534 9.577 24.554 C 9.597 24.724 9.757 24.744 9.857 24.834 C 9.967 24.934 10.097 24.974 10.217 25.034 C 10.317 25.074 10.377 25.164 10.477 25.214 C 10.787 25.214 10.957 24.994 11.157 24.804 C 11.147 24.664 11.267 24.624 11.337 24.554 C 11.617 24.264 11.897 23.984 12.177 23.714 C 12.077 23.534 11.997 23.344 11.887 23.194 C 11.747 23.024 11.577 22.884 11.437 22.734 Z" fill={fillColor} />
        </g>
      </g>
      <g className="left">
        <title>Left Sword</title>
        <g transform="matrix(1.050505, 0, 0, 1.041307, -0.384793, -0.941826)">
          <title>Blade</title>
          <path className="border" d="M 14.826 21.544 C 14.991 21.275 15.271 21.138 15.48 20.922 C 15.579 20.829 15.676 20.759 15.803 20.706 C 15.942 20.665 15.929 20.502 16.082 20.408 C 16.361 20.243 16.543 19.944 16.851 19.795 C 17.021 19.715 16.977 19.458 17.202 19.444 C 17.492 19.146 17.885 18.968 18.137 18.629 C 18.291 18.397 18.514 18.247 18.709 18.073 C 18.837 17.964 19.075 17.964 19.089 17.789 C 19.115 17.598 19.397 17.653 19.352 17.449 C 19.618 17.409 19.675 17.125 19.898 17.054 C 20.151 16.975 20.234 16.702 20.487 16.636 C 20.708 16.568 20.737 16.27 20.919 16.12 C 21.017 16.051 21.072 15.943 21.17 15.875 C 21.689 15.536 22.148 15.142 22.47 14.627 C 22.694 14.585 22.666 14.274 22.918 14.259 C 23.143 13.989 23.519 13.881 23.672 13.569 C 23.758 13.569 23.827 13.555 23.897 13.555 C 24.064 13.284 24.342 13.147 24.581 12.984 C 24.818 12.837 25 12.673 25.141 12.457 C 25.169 12.415 25.183 12.375 25.223 12.347 C 25.757 12.034 26.189 11.628 26.636 11.22 C 27.181 10.733 27.783 10.3 28.271 9.756 C 28.396 9.619 28.565 9.499 28.734 9.389 C 28.901 9.282 29.123 9.201 29.238 9.011 C 29.46 8.629 29.795 8.318 29.975 7.803 C 29.975 7.666 30.003 7.436 30.06 7.192 C 30.131 6.85 30.103 6.498 30.076 6.146 C 30.048 5.808 30.213 5.483 30.186 5.143 C 30.158 4.695 30.172 4.247 30.186 3.8 C 30.186 3.352 30.354 2.902 30.285 2.444 C 30.285 2.429 30.285 2.402 30.285 2.39 C 30.48 2.092 30.354 1.709 30.396 1.371 C 30.231 1.207 30.09 1.072 29.934 0.924 C 29.627 0.882 29.294 0.991 29.012 0.801 C 28.986 0.829 28.957 0.855 28.93 0.882 C 28.913 0.897 28.901 0.909 28.887 0.909 C 28.258 0.909 27.614 0.909 26.986 0.909 C 26.874 0.909 26.791 0.882 26.719 0.816 C 26.707 0.801 26.692 0.816 26.636 0.816 C 26.58 0.965 26.442 0.924 26.301 0.909 C 25.546 0.87 24.778 1.019 24.035 0.816 C 23.941 0.786 23.827 0.816 23.73 0.816 C 23.632 0.816 23.478 0.786 23.434 0.843 C 23.339 0.965 23.169 0.855 23.112 0.951 C 23.03 1.084 22.974 0.897 22.892 0.951 C 22.625 1.128 22.302 1.128 22.009 1.112 C 21.869 1.25 21.773 1.426 21.632 1.467 C 21.436 1.534 21.464 1.765 21.31 1.779 C 21.058 1.819 21.017 2.022 20.947 2.172 C 20.807 2.47 20.499 3.013 20.277 3.095 C 20.124 3.149 20.024 3.255 19.927 3.352 C 19.731 3.553 19.464 3.691 19.382 3.975 C 19.075 4.098 18.906 4.342 18.725 4.599 C 18.543 4.872 18.221 5.022 18.052 5.334 C 17.998 5.453 17.831 5.495 17.732 5.644 C 17.592 5.874 17.396 6.094 17.185 6.269 C 17.004 6.417 16.878 6.621 16.711 6.785 C 16.558 6.947 16.474 7.179 16.361 7.394 C 16.137 7.436 15.942 7.558 15.803 7.747 C 15.676 7.923 15.495 8.047 15.382 8.221 C 15.102 8.656 14.711 8.984 14.349 9.35 C 14.349 9.416 14.349 9.485 14.349 9.54 C 14.253 9.701 14.014 9.687 13.917 9.851 C 13.705 10.217 13.37 10.461 13.078 10.76 C 12.979 10.856 12.923 11.032 12.853 11.06 C 12.685 11.111 12.545 11.22 12.518 11.33 C 12.39 11.71 12.071 11.925 11.82 12.198 C 11.693 12.334 11.539 12.446 11.496 12.62 C 11.442 12.837 11.275 12.999 11.121 13.053 C 10.91 13.135 10.868 13.284 10.77 13.42 C 10.602 13.693 10.505 13.989 10.155 14.109 C 10.031 14.329 9.721 14.355 9.609 14.585 C 9.355 15.088 8.911 15.427 8.478 15.765 C 8.478 15.82 8.478 15.862 8.478 15.957 C 7.974 16.323 7.68 16.865 7.219 17.261 C 7.094 17.367 6.953 17.475 6.842 17.598 C 6.534 17.924 6.269 18.303 5.989 18.643 C 5.568 19.146 5.082 19.607 4.632 20.081 C 4.394 20.338 4.27 20.651 4.285 20.99 C 4.312 21.342 4.354 21.723 4.648 21.981 C 4.968 22.264 5.22 22.633 5.613 22.835 C 5.683 22.877 5.78 22.943 5.793 23.013 C 5.835 23.188 5.977 23.284 6.088 23.392 C 6.633 23.922 7.179 24.435 7.708 24.981 C 7.989 25.263 8.31 25.453 8.674 25.618 C 9.203 25.86 9.721 25.752 10.169 25.453 C 10.533 25.224 10.884 24.981 11.147 24.627 C 11.23 24.518 11.356 24.435 11.485 24.356 C 11.733 24.206 11.988 24.042 12.182 23.812 C 12.267 23.718 12.335 23.582 12.489 23.567 C 12.644 23.567 12.531 23.379 12.658 23.363 C 12.797 23.351 12.882 23.284 12.894 23.162 C 12.908 23.013 13.118 23.106 13.103 22.999 C 13.078 22.807 13.259 22.889 13.328 22.793 C 13.608 22.374 13.957 22.008 14.445 21.816 C 14.617 21.751 14.753 21.668 14.826 21.544 Z" fill={strokeColor} />
          <path d="M 16.509 18.679 C 16.639 18.458 16.859 18.347 17.023 18.169 C 17.1 18.093 17.176 18.037 17.275 17.993 C 17.384 17.96 17.373 17.826 17.495 17.75 C 17.712 17.615 17.856 17.371 18.097 17.249 C 18.23 17.183 18.195 16.972 18.37 16.961 C 18.6 16.718 18.907 16.573 19.104 16.296 C 19.225 16.105 19.4 15.983 19.552 15.84 C 19.652 15.751 19.839 15.751 19.85 15.609 C 19.87 15.453 20.092 15.498 20.057 15.331 C 20.266 15.298 20.31 15.065 20.484 15.008 C 20.683 14.943 20.748 14.719 20.946 14.666 C 21.12 14.61 21.142 14.367 21.285 14.244 C 21.361 14.187 21.405 14.099 21.483 14.044 C 21.888 13.766 22.249 13.445 22.501 13.023 C 22.675 12.989 22.653 12.735 22.852 12.722 C 23.028 12.502 23.323 12.414 23.442 12.158 C 23.509 12.158 23.563 12.147 23.618 12.147 C 23.75 11.925 23.968 11.814 24.155 11.681 C 24.341 11.56 24.483 11.426 24.595 11.25 C 24.616 11.214 24.627 11.182 24.659 11.159 C 25.076 10.904 25.414 10.572 25.766 10.239 C 26.193 9.839 26.664 9.486 27.048 9.041 C 27.145 8.929 27.277 8.832 27.41 8.742 C 27.541 8.654 27.715 8.588 27.805 8.432 C 27.978 8.12 28.241 7.865 28.383 7.445 C 28.383 7.334 28.405 7.144 28.449 6.945 C 28.504 6.666 28.483 6.379 28.462 6.09 C 28.44 5.814 28.57 5.548 28.548 5.271 C 28.526 4.904 28.537 4.537 28.548 4.171 C 28.548 3.805 28.68 3.438 28.627 3.062 C 28.627 3.05 28.627 3.029 28.627 3.019 C 28.779 2.775 28.68 2.463 28.712 2.185 C 28.584 2.052 28.472 1.941 28.351 1.82 C 28.11 1.787 27.848 1.876 27.628 1.72 C 27.606 1.742 27.584 1.764 27.563 1.787 C 27.55 1.799 27.541 1.808 27.529 1.808 C 27.037 1.808 26.532 1.808 26.04 1.808 C 25.952 1.808 25.887 1.787 25.831 1.732 C 25.822 1.72 25.81 1.732 25.766 1.732 C 25.721 1.854 25.613 1.82 25.504 1.808 C 24.912 1.777 24.31 1.898 23.727 1.732 C 23.653 1.708 23.563 1.732 23.488 1.732 C 23.411 1.732 23.29 1.708 23.256 1.754 C 23.181 1.854 23.048 1.764 23.004 1.842 C 22.939 1.952 22.895 1.799 22.831 1.842 C 22.622 1.987 22.368 1.987 22.139 1.974 C 22.029 2.087 21.955 2.231 21.843 2.265 C 21.69 2.319 21.712 2.508 21.592 2.519 C 21.393 2.553 21.361 2.718 21.307 2.841 C 21.198 3.084 20.956 3.529 20.781 3.596 C 20.662 3.639 20.584 3.726 20.507 3.805 C 20.355 3.97 20.145 4.082 20.08 4.316 C 19.839 4.416 19.707 4.615 19.565 4.825 C 19.422 5.047 19.171 5.171 19.038 5.426 C 18.995 5.524 18.864 5.558 18.787 5.68 C 18.677 5.867 18.524 6.047 18.358 6.19 C 18.217 6.312 18.118 6.479 17.986 6.612 C 17.867 6.745 17.801 6.934 17.712 7.109 C 17.538 7.144 17.384 7.245 17.275 7.399 C 17.176 7.543 17.033 7.644 16.946 7.787 C 16.726 8.141 16.419 8.41 16.135 8.709 C 16.135 8.763 16.135 8.82 16.135 8.864 C 16.06 8.996 15.873 8.985 15.796 9.119 C 15.631 9.418 15.369 9.618 15.139 9.863 C 15.062 9.94 15.018 10.084 14.963 10.106 C 14.832 10.149 14.721 10.239 14.7 10.329 C 14.601 10.639 14.349 10.815 14.154 11.037 C 14.054 11.148 13.933 11.24 13.9 11.383 C 13.857 11.56 13.726 11.693 13.606 11.737 C 13.439 11.803 13.407 11.925 13.33 12.037 C 13.199 12.26 13.122 12.502 12.849 12.6 C 12.75 12.78 12.508 12.801 12.42 12.989 C 12.223 13.4 11.874 13.677 11.534 13.954 C 11.534 13.999 11.534 14.033 11.534 14.11 C 11.139 14.41 10.909 14.853 10.547 15.177 C 10.45 15.264 10.339 15.352 10.252 15.453 C 10.01 15.719 9.803 16.028 9.584 16.307 C 9.254 16.718 8.873 17.095 8.521 17.483 C 8.333 17.693 8.236 17.949 8.248 18.226 C 8.269 18.514 8.303 18.825 8.533 19.035 C 8.783 19.268 8.981 19.569 9.289 19.734 C 9.343 19.768 9.418 19.822 9.43 19.879 C 9.463 20.022 9.573 20.101 9.661 20.189 C 10.088 20.622 10.516 21.042 10.931 21.488 C 11.15 21.719 11.404 21.875 11.688 22.009 C 12.102 22.207 12.508 22.119 12.86 21.875 C 13.145 21.688 13.419 21.488 13.626 21.198 C 13.692 21.109 13.791 21.042 13.89 20.977 C 14.086 20.855 14.285 20.72 14.438 20.532 C 14.504 20.455 14.557 20.345 14.678 20.333 C 14.798 20.333 14.711 20.178 14.81 20.165 C 14.919 20.155 14.985 20.101 14.996 20.001 C 15.006 19.879 15.171 19.955 15.159 19.868 C 15.139 19.712 15.281 19.778 15.336 19.7 C 15.554 19.358 15.828 19.058 16.211 18.9 C 16.346 18.847 16.452 18.78 16.509 18.679 Z" fill={fillColor} />
        </g>
        <g>
          <title>Hilt</title>
          <path d="M 11.437 22.734 C 11.237 22.534 10.997 22.384 10.847 22.144 C 10.747 21.994 10.567 21.934 10.487 21.894 C 10.337 21.734 10.277 21.604 10.147 21.494 C 9.937 21.324 9.747 21.124 9.577 20.894 C 9.397 20.654 9.147 20.454 8.907 20.244 C 8.627 20.004 8.327 19.764 8.087 19.464 C 7.897 19.224 7.657 19.024 7.447 18.814 C 7.357 18.724 7.247 18.644 7.227 18.494 C 6.987 18.554 6.797 18.494 6.607 18.364 C 6.537 18.554 6.387 18.644 6.247 18.744 C 5.927 18.984 5.717 19.334 5.447 19.624 C 5.337 19.734 5.217 19.894 5.257 20.094 C 5.257 20.114 5.217 20.144 5.177 20.194 C 5.437 20.254 5.407 20.564 5.657 20.654 C 5.857 20.724 5.917 20.984 6.077 21.134 C 6.247 21.284 6.467 21.374 6.597 21.584 C 6.537 21.984 6.127 22.144 5.957 22.484 C 5.907 22.484 5.857 22.484 5.817 22.484 C 5.597 22.704 5.387 22.924 5.167 23.134 C 4.957 23.334 4.767 23.554 4.537 23.734 C 4.317 23.914 4.117 24.124 3.897 24.314 C 3.647 24.214 3.237 24.224 2.957 24.294 C 2.817 24.334 2.677 24.424 2.517 24.384 C 2.417 24.544 2.237 24.564 2.087 24.594 C 1.907 24.644 1.767 24.744 1.657 24.884 C 1.547 25.024 1.477 25.184 1.297 25.244 C 1.337 25.404 1.147 25.324 1.117 25.424 C 1.087 25.514 1.047 25.594 1.007 25.674 C 0.987 25.704 0.967 25.734 0.937 25.754 C 0.757 25.884 0.677 26.084 0.557 26.324 C 0.547 26.414 0.607 26.574 0.477 26.684 C 0.497 26.754 0.567 26.764 0.557 26.824 C 0.427 27.064 0.467 27.304 0.517 27.554 C 0.567 27.784 0.637 28.014 0.697 28.244 C 0.757 28.474 0.837 28.684 1.007 28.854 C 1.187 29.034 1.387 29.204 1.547 29.404 C 1.667 29.544 1.857 29.574 1.987 29.684 C 2.197 29.644 2.357 29.794 2.547 29.844 C 2.657 29.874 2.767 29.904 2.887 29.904 C 3.027 29.904 3.157 29.904 3.297 29.834 C 3.447 29.764 3.577 29.954 3.737 29.904 C 3.817 29.884 3.897 29.904 3.967 29.844 C 4.017 29.804 4.127 29.824 4.187 29.824 C 4.347 29.684 4.467 29.544 4.647 29.454 C 4.817 29.374 4.997 29.274 5.087 29.124 C 5.177 28.974 5.277 28.834 5.377 28.694 C 5.467 28.554 5.497 28.384 5.567 28.224 C 5.697 27.914 5.737 27.584 5.837 27.274 C 5.857 27.214 5.857 27.114 5.817 27.064 C 5.757 26.994 5.787 26.964 5.837 26.934 C 5.767 26.884 5.767 26.824 5.767 26.744 C 5.767 26.674 5.797 26.594 5.737 26.534 C 5.727 26.514 5.707 26.504 5.697 26.474 C 6.047 26.174 6.287 25.764 6.637 25.464 C 6.667 25.434 6.637 25.364 6.697 25.344 C 6.747 25.344 6.787 25.344 6.837 25.344 C 6.917 25.264 6.987 25.174 7.077 25.114 C 7.167 25.044 7.147 24.874 7.307 24.884 C 7.317 24.824 7.317 24.764 7.327 24.714 C 7.597 24.624 7.777 24.424 7.997 24.274 C 8.237 24.114 8.337 23.814 8.587 23.634 C 8.707 23.754 8.827 23.864 8.927 23.984 C 9.027 24.094 9.157 24.154 9.247 24.284 C 9.327 24.394 9.407 24.534 9.577 24.554 C 9.597 24.724 9.757 24.744 9.857 24.834 C 9.967 24.934 10.097 24.974 10.217 25.034 C 10.317 25.074 10.377 25.164 10.477 25.214 C 10.787 25.214 10.957 24.994 11.157 24.804 C 11.147 24.664 11.267 24.624 11.337 24.554 C 11.617 24.264 11.897 23.984 12.177 23.714 C 12.077 23.534 11.997 23.344 11.887 23.194 C 11.747 23.024 11.577 22.884 11.437 22.734 Z" fill={fillColor} />
        </g>
      </g>
    </g>
  )
}

export function Swords({ fill, stroke }: { fill?: string, stroke?: string }) {
  return (
    <svg viewBox="0 0 30 30" width="30" height="30" className="ccwc-svgicon--swords">
      <SwordsGroup fill={fill} stroke={stroke} />
    </svg>
  )
}

export default Swords;