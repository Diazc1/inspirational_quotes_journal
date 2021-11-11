require "test_helper"

class InspirationalQuotesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @inspirational_quote = inspirational_quotes(:one)
  end

  test "should get index" do
    get inspirational_quotes_url, as: :json
    assert_response :success
  end

  test "should create inspirational_quote" do
    assert_difference('InspirationalQuote.count') do
      post inspirational_quotes_url, params: { inspirational_quote: { author: @inspirational_quote.author, date: @inspirational_quote.date, meaning: @inspirational_quote.meaning, quote: @inspirational_quote.quote } }, as: :json
    end

    assert_response 201
  end

  test "should show inspirational_quote" do
    get inspirational_quote_url(@inspirational_quote), as: :json
    assert_response :success
  end

  test "should update inspirational_quote" do
    patch inspirational_quote_url(@inspirational_quote), params: { inspirational_quote: { author: @inspirational_quote.author, date: @inspirational_quote.date, meaning: @inspirational_quote.meaning, quote: @inspirational_quote.quote } }, as: :json
    assert_response 200
  end

  test "should destroy inspirational_quote" do
    assert_difference('InspirationalQuote.count', -1) do
      delete inspirational_quote_url(@inspirational_quote), as: :json
    end

    assert_response 204
  end
end
