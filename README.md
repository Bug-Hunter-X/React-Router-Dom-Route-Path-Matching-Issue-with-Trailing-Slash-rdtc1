# React Router Dom Route Path Matching Issue
This repository demonstrates a common issue with React Router Dom's Route component where paths don't match when a trailing slash is present in the URL.

## Problem
The provided code uses `react-router-dom` version 6.  When you navigate to `/about/` the `About` component does not render because the route path is specified as `/about`.  There are a few ways to resolve this.