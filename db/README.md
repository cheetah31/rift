# DB

PostgreSQL 스키마 관리 디렉토리.

## 초기 설정

```bash
psql -U postgres -c "CREATE DATABASE rift;"
psql -U postgres -d rift -f init.sql
```
