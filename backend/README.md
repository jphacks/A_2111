## バックエンド

githubにpushするとherokuに自動でデプロイされます。
ローカル環境での実行は`uvicorn main:app --host=0.0.0.0 --port=${PORT:-5000}`で可能です。


## エンドポイント一覧
```
{
    "openapi": "3.0.2",
    "info": {
        "title": "FastAPI",
        "version": "0.1.0"
    },
    "paths": {
        "/": {
            "get": {
                "summary": "Root",
                "operationId": "root__get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/members": {
            "get": {
                "summary": "Get Members",
                "operationId": "get_members_members_get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/member": {
            "get": {
                "summary": "Get Member",
                "operationId": "get_member_member_get",
                "parameters": [
                    {
                        "required": true,
                        "schema": {
                            "title": "Uuid",
                            "type": "string"
                        },
                        "name": "uuid",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            },
            "put": {
                "summary": "Put Member",
                "operationId": "put_member_member_put",
                "parameters": [
                    {
                        "required": true,
                        "schema": {
                            "title": "Uuid",
                            "type": "string"
                        },
                        "name": "uuid",
                        "in": "query"
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_put_member_member_put"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "summary": "Post Member",
                "operationId": "post_member_member_post",
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_post_member_member_post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete Member",
                "operationId": "delete_member_member_delete",
                "parameters": [
                    {
                        "required": true,
                        "schema": {
                            "title": "Uuid",
                            "type": "string"
                        },
                        "name": "uuid",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        },
        "/familiars": {
            "get": {
                "summary": "Get Familiars",
                "operationId": "get_familiars_familiars_get",
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    }
                }
            }
        },
        "/familiar": {
            "get": {
                "summary": "Get Familiar",
                "operationId": "get_familiar_familiar_get",
                "parameters": [
                    {
                        "required": true,
                        "schema": {
                            "title": "Uuid",
                            "type": "string"
                        },
                        "name": "uuid",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            },
            "post": {
                "summary": "Post Familiar",
                "operationId": "post_familiar_familiar_post",
                "requestBody": {
                    "content": {
                        "application/x-www-form-urlencoded": {
                            "schema": {
                                "$ref": "#/components/schemas/Body_post_familiar_familiar_post"
                            }
                        }
                    },
                    "required": true
                },
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            },
            "delete": {
                "summary": "Delete Familiar",
                "operationId": "delete_familiar_familiar_delete",
                "parameters": [
                    {
                        "required": true,
                        "schema": {
                            "title": "Start",
                            "type": "string"
                        },
                        "name": "start",
                        "in": "query"
                    },
                    {
                        "required": true,
                        "schema": {
                            "title": "End",
                            "type": "string"
                        },
                        "name": "end",
                        "in": "query"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful Response",
                        "content": {
                            "application/json": {
                                "schema": {}
                            }
                        }
                    },
                    "422": {
                        "description": "Validation Error",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/HTTPValidationError"
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "Body_post_familiar_familiar_post": {
                "title": "Body_post_familiar_familiar_post",
                "required": [
                    "start",
                    "end"
                ],
                "type": "object",
                "properties": {
                    "start": {
                        "title": "Start",
                        "type": "string"
                    },
                    "end": {
                        "title": "End",
                        "type": "string"
                    }
                }
            },
            "Body_post_member_member_post": {
                "title": "Body_post_member_member_post",
                "required": [
                    "name"
                ],
                "type": "object",
                "properties": {
                    "name": {
                        "title": "Name",
                        "type": "string"
                    }
                }
            },
            "Body_put_member_member_put": {
                "title": "Body_put_member_member_put",
                "required": [
                    "name"
                ],
                "type": "object",
                "properties": {
                    "name": {
                        "title": "Name",
                        "type": "string"
                    }
                }
            },
            "HTTPValidationError": {
                "title": "HTTPValidationError",
                "type": "object",
                "properties": {
                    "detail": {
                        "title": "Detail",
                        "type": "array",
                        "items": {
                            "$ref": "#/components/schemas/ValidationError"
                        }
                    }
                }
            },
            "ValidationError": {
                "title": "ValidationError",
                "required": [
                    "loc",
                    "msg",
                    "type"
                ],
                "type": "object",
                "properties": {
                    "loc": {
                        "title": "Location",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "msg": {
                        "title": "Message",
                        "type": "string"
                    },
                    "type": {
                        "title": "Error Type",
                        "type": "string"
                    }
                }
            }
        }
    }
}
```
