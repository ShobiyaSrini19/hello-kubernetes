def test_logic():
    # A simple math test to make sure Python is running
    assert 1 + 1 == 2

def test_app_import():
    # This checks if your app.py can be loaded without errors
    try:
        import app
        assert True
    except Exception as e:
        assert False, f"App failed to load: {e}"


