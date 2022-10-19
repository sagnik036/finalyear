from django.views import View

class FormatErrorResponses(View):
    """this will automatically formates our errors data"""
    @staticmethod
    def error_response(validate_data_errors):
        response = [{error: validate_data_errors[error][0]} for error in validate_data_errors]
        return response